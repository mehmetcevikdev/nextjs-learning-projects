import { posts } from "@/lib/data"; 

const BlogList = () => {
  return (
    <div>
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

export default BlogList;