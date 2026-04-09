import { posts } from "@/lib/data";

const BlogPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">SSR Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
