import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold"></h1>

      <p>Written by : jon</p>

      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet
        quod, perferendis consectetur exercitationem voluptas eius voluptates!
        Magni, quas debitis!
      </div>

      <Comments />

      <FormComment />
    </div>
  );
};

export default BlogDetailPage;
