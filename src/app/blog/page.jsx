import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Indoor Plants for Beginners",
      summary:
        "Learn about easy-to-care indoor plants that can brighten your home and purify air.",
      date: "2025-11-27",
    },
    {
      id: 2,
      title: "How to Care for Your Succulents",
      summary:
        "Tips and tricks to keep your succulents healthy and thriving all year round.",
      date: "2025-11-25",
    },
    {
      id: 3,
      title: "Decorating with Plants",
      summary:
        "Creative ways to incorporate plants into your home décor for a fresh look.",
      date: "2025-11-23",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
