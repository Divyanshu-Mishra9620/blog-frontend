import BlogCard from "../components/BlogCard";

export const Blog = () => {
  return (
    <div>
      <BlogCard
        authorName={"Divyanshu Mishra"}
        title={"Lorem ipsum dolor sit amet"}
        content={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe veniam excepturi hic rem! Laborum deleniti, deserunt vero architecto alias, facilis itaque quaerat excepturi quas illum consequuntur illo ea ab."
        }
        publishedDate={"27th of June 2025"}
      />
    </div>
  );
};
