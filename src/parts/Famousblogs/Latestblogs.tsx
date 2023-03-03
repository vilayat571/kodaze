import { useEffect } from "react";
import { Link } from "react-router-dom";
import { latestBlogs } from "../../redux/reducers/latestReducer";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";

export default function Latestblogs() {
  const blogs = useAppSelector(
    (state: RootState) => state.getBlogsReducer.data
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(latestBlogs());
  }, [dispatch]);

  return (
    <div className="h-auto mb-12 flex justify-center items-center w-full">
      <div className="lg:w-[1100px] xl:w-[1300px]  flex flex-col ">
        <div>
          <h1 className="text-[#243045] text-2xl mb-6 font-semibold">
            Latest blogs
          </h1>
        </div>
        <div
          className=" w-full h-auto gap-4 rounded grid 
        xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2"
        >
          {blogs &&
            blogs.map((blog: any, key: number) => {
              return (
                <Link
                  to={`/blogs/${blog.id}`}
                  key={key}
                  className="col-span-2 mb-12 flex flex-col"
                >
                  <img
                    className="h-[260px] rounded-md"
                    src={blog.image}
                    alt={blog.name}
                  />
                  <div className="gap-1 pl-5 mt-4 flex flex-col items-start">
                    <span className="text-xl tracking-[1px] font-medium text-[#243045]">
                      {blog.name}
                    </span>
                    <span className="text-[#333] line-clamp-2 text-sm">
                      {blog.description}
                    </span>
                    <button className="mt-2  rounded-sm 
                    flex items-center text-[#243045] bg-[#fff]  ">
                      <span> Read more</span>
                      <i className="fa-solid text-sm ml-1 fa-arrow-right"></i>
                    </button>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
