import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import BlogSkeleton from "../components/BlogSkeleton";
import Appbar from "../components/Appbar";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog, error } = useBlog({ id: id || "" });

  if (loading)
    return (
      <div>
        <Appbar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
