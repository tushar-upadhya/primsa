import { posts } from "@/data/posts";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((index) => {
          return (
            <Link
              href={`/blogs/${index.id}`}
              key={index.id}
              className=" p-4 rounded-md shadow-md"
            >
              <h2 className="text-xl font-bold">{index.title}</h2>
              <p>Written by: {index.username}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
