import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ✅ Fetch blogs from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs") // adjust port if needed
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  // ✅ Create blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, content };

    const res = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    });

    const data = await res.json();
    setBlogs([...blogs, data]); // add new blog to state
    setTitle("");
    setContent("");
  };

  // ✅ Delete blog
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
    });

    setBlogs(blogs.filter((b) => b._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>

      {/* Create Blog Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Title"
          className="border px-3 py-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="border px-3 py-2 w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Blog
        </button>
      </form>

      {/* Blog List */}
      <div className="space-y-4">
        {blogs.length === 0 ? (
          <p>No blogs yet. Create one!</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
              <button
                onClick={() => handleDelete(blog._id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
