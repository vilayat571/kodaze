import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Coverofpages from "../../components/About/Coverofpages";
import Layout from "../../layout/Layout";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    fetch(`https://django.kodaze.com/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  return (
    <Layout>
      <Coverofpages
        src={"https://tfhtml.themepul.com/restly/assets/images/banner.jpg"}
        title={`${blog !== null && blog.name}`}
        text={"Blogs"}
      />
      <div className="w-full my-4 flex justify-center items-center ">
        {blog !== null && (
          <div className="text-sm flex flex-col justify-center items-center ">
            <div className="w-3/5 flex flex-col" />
            <img src={blog.image} className={"xl:w-1/2 lg:w-1/2 md:w-full sm:w-full px-6   rounded-xl mt-6"} alt="" />
            <div className={"xl:w-1/2 lg:w-1/2 md:w-full sm:w-full px-6 mt-6 rounded-md "}>
              <span className="capitalize text-xl mb-2 font-semibold">
                {blog.name}
              </span>
              <p className="">{blog.description}</p>
              <p dangerouslySetInnerHTML={{ __html: blog.body }} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
