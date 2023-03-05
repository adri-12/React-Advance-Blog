import { useNavigate } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/blogs/${id}`);
  }

  return (
    <div className="blog-list">
      <h1 className="blog-title">{title}</h1>
      <span></span>
      {blogs.map((blog) => (
        <div
          className="blog-preview"
          key={blog.id}
          onClick={() => handleClick(blog.id)}
        >
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
