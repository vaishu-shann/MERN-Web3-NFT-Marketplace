import React, { useState, useEffect } from "react";
import Product404 from "../../../components/UiComponents/Product404";
import LoadingBar from "react-top-loading-bar";
import { getCollections } from "../../../api/collection.apis";
import {
  ProductCollection,
  SkeletonProductCollection,
} from "../../../components/UiComponents/ProductCollection";

function ShopCollections({ filters }) {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 1, 2, 3];
  const [CollectionsItems, setCollectionsItems] = useState([{id:"1",CollectionImages:[{one:"https://assets-global.website-files.com/62624e283b503f0ce727563e/6499aa6dbd4dbc441a7799da_649061827a478e5df442d3f2_TATUM_BLOG_NFT_4.png",two:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZVXkUom8rdmUzPPwy35wKfl9kg-sR5I3IKcxs3yqiief6O0rK8qTq0G-JryIBAOCJfM&usqp=CAU",three:"https://media.licdn.com/dms/image/D4D12AQE8q6Iu5ctELg/article-cover_image-shrink_720_1280/0/1684654574247?e=2147483647&v=beta&t=oivHoW7qwB38RJnJK59bv6xAGUSru7edNFlbkDI2m_Y",four:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8BpJuevk2BHePX0VcxwEHwHRrphKA6X6kIBO81o4dGcan9m4Cwz6MjYBL3XSAPjU0h0&usqp=CAU"}],CollectionName:"Astro Collection",CollectionTag:"34567899uyt"}]);
  const [IsLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(30);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    filters.set("search", "");
    filters.set("category", "");
  }, []);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getCollections(
          filters.get("search"),
          filters.get("category"),
          limit
        );
        setCollectionsItems(response);
        setProgress(100);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [filters,limit]);

  const loadMore = () => {
    setLimit(limit + 10);
  };
  return (
    <>
      <LoadingBar
        color="#f00076"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div
        id="collections"
        className="flex relative z-10 justify-evenly flex-wrap gap-10"
      >
        {IsLoading ? (
          CollectionsItems?.length > 0 ? (
            CollectionsItems?.map((item, index) => (
              <ProductCollection
                width="20pc"
                link="/collection/"
                kay={index}
                item={item}
              />
            ))
          ) : (
            <div className="h-[30pc] flex justify-center items-center">
              <Product404
                message="Collections not found"
                subMessage="reload page or wait for fetching !"
              />
            </div>
          )
        ) : (
          DummySkeletonData?.map((item, index) => (
            <SkeletonProductCollection key={index} />
          ))
        )}
      </div>
      <button
        type="button"
        onClick={loadMore}
        className="py-2.5 px-5 self-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
      >
        Load More
      </button>
    </>
  );
}

export default ShopCollections;
