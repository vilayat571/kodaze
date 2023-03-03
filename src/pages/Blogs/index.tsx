import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coverofpages from "../../components/About/Coverofpages";
import Layout from "../../layout/Layout";
import { fetchBlogs } from "../../redux/reducers/getBlogsReducer";
import { fetchRightSide } from "../../redux/reducers/rightReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

export default function Blog() {
  const [limit, setLimit] = useState(4);

  const dispatch = useAppDispatch();

  const rData = useAppSelector((state: RootState) => state.rightReducer.rData);

  const data = useAppSelector((state: RootState) => state.getBlogsReducer.data);

  const handleLimit = () => {
    setLimit(limit + 4);
    dispatch(fetchBlogs({ limit, query }));
  };

  const [query, setQuery] = useState("");
  useEffect(() => {
    dispatch(fetchRightSide());
    dispatch(fetchBlogs({ limit, query }));
  }, [dispatch, limit, query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchBlogs({ limit, query }));
  };

  return (
    <Layout>
      <Coverofpages
        src={"https://tfhtml.themepul.com/restly/assets/images/banner.jpg"}
        title={`"Welcome to Kodaze Blogs`}
        text={"Blogs"}
      />
      <div className="xl:hidden lg:hidden md:flex sm:flex justify-center items-center mt-12">
        <form className="" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex gap-1 items-center">
            <input
              value={query}
              onChange={(e) => handleChange(e)}
              placeholder="Search"
              type="text"
              className="h-12 w-full border outline-none indent-3 placeholder:font-thin"
            />
            <span className="w-16  h-12 flex bg-[#243045] justify-center items-center">
              <i
                className=" text-white
                fa-sharp fa-solid fa-magnifying-glass"
              ></i>
            </span>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center mt-16  w-full">
        <div
          className="w-[950px] grid 
        xl:grid-cols-7 lg:grid-cols-7 sm:grid-cols-4 md:grid-cols-4 
       lg:gap-8 md:gap-0 sm:gap-0 xl:gap-8 "
        >
          <div
            className="grid
          grid-cols-1  mx-auto w-full col-span-4 "
          >
            {data !== null && data.length > 0 ? (
              data.map((item: any) => {
                return (
                  <Link
                    to={`/blogs/${item.id}`}
                    key={item.id}
                    className="col-span-1 ml-[22px] w-[480px] mb-16 shadow-sm pb-8 "
                  >
                    <img
                      className="w-[480px] object-cover h-[316px] rounded-t-md"
                      src={item.image}
                      alt=""
                    />
                    <div className=" px-4 flex flex-col items-start">
                      <span className="  mt-4 font-semibold text-xl text-[#243045] ">
                        {item.name}
                      </span>
                      <p className="line-clamp-2 mt-2 text-normal text-[#333] ">
                        {item.description}
                      </p>
                      <button
                        className="mt-3 text-[#fff] bg-[#243045] rounded-sm
                       px-6 py-3"
                      >
                        Learn more
                      </button>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="text-lg text-[#333] w-full text-center">
                Sorry, we can not find any result according to your query
              </div>
            )}
            <div className="flex justify-center items-center w-full mb-12 py-2 ">
              {data.length > 0 && (
                <button
                  onClick={() => handleLimit()}
                  className="px-6 py-3 bg-[#243045] text-white rounded-sm"
                >
                  Load more
                </button>
              )}
            </div>
          </div>

          <div className="col-span-3  py-4 px-4 mb-12 xl:flex lg:flex md:hidden sm:hidden flex-col">
            <form className="" onSubmit={(e) => handleSubmit(e)}>
              <div className="flex gap-1 items-center">
                <input
                  value={query}
                  onChange={(e) => handleChange(e)}
                  placeholder="Search"
                  type="text"
                  className="h-12 w-full border outline-none indent-3 placeholder:font-thin"
                />
                <span className="w-16  h-12 flex bg-[#243045] justify-center items-center">
                  <i
                    className=" text-white
                fa-sharp fa-solid fa-magnifying-glass"
                  ></i>
                </span>
              </div>
            </form>

            <div className="border flex-col mt-6 items-center">
              {rData !== null &&
                rData.length > 0 &&
                rData.map((item: any) => {
                  return (
                    <Link
                      to={`/blogs/${item.id}`}
                      key={item.id}
                      className="col-span-1 flex  w-full border-b px-5 py-6 "
                    >
                      <div className="flex">
                        <img
                          className=" object-cover w-16 h-16 rounded-full"
                          src={item.image}
                          alt=""
                        />
                        <div className=" px-4 flex flex-col items-start">
                          <span className=" mt-2 capitalize text-normal text-[#243045] ">
                            {item.name}
                          </span>
                          <p className="lowercase text-sm text-[#6a6a6a] ">
                            {item.category.category_name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
