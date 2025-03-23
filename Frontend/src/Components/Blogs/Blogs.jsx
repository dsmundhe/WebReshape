import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

// Custom Card Component
const Card = ({ children, className }) => {
  return (
    <div className={`p-6 shadow-lg rounded-2xl mb-6 bg-white ${className}`}>
      {children}
    </div>
  );
};

// Custom Button Component
const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border rounded-lg hover:bg-gray-200 transition ${className}`}
    >
      {children}
    </button>
  );
};

const blogsData = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    content: "Learn how React Hooks revolutionize functional components.",
    name: "John Doe",
    category: "Web Development",
    image: "https://example.com/blog-images/react-hooks.jpg",
    ownerImage: "https://example.com/user-profiles/john-doe.jpg",
    votes: { upvotes: 5, downvotes: 1 },
    comments: [
      { id: 1, content: "Great explanation!", author: "Alice", votes: { upvotes: 2, downvotes: 0 } },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals for Web Developers",
    content: "Explore ML applications like recommendation systems and content personalization.",
    name: "Marcus Wong",
    category: "Artificial Intelligence",
    image: "https://example.com/blog-images/ml-for-devs.jpg",
    ownerImage: "https://example.com/user-profiles/marcus-wong.jpg",
    votes: { upvotes: 2, downvotes: 2 },
    comments: [
      { id: 1, content: "This is a great article on machine learning fundamentals!", author: "Jane Smith", votes: { upvotes: 0, downvotes: 0 } },
    ],
  },
];

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {blogsData.map((blog) => (
        <Card key={blog.id}>
          <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-4" />
          <div className="flex items-center gap-3 mb-4">
            <img src={blog.ownerImage} alt={blog.name} className="w-10 h-10 rounded-full" />
            <h2 className="text-xl font-semibold">{blog.name}</h2>
          </div>
          <h1 className="text-2xl font-bold mb-3">{blog.title}</h1>
          <p className="text-gray-600 mb-4">{blog.content}</p>
          <div className="flex gap-4 mb-4">
            <Button>
              <FaThumbsUp className="mr-2" /> {blog.votes.upvotes}
            </Button>
            <Button>
              <FaThumbsDown className="mr-2" /> {blog.votes.downvotes}
            </Button>
          </div>
          <h3 className="text-lg font-semibold mb-3">Comments:</h3>
          <div className="space-y-3">
            {blog.comments.map((comment) => (
              <div key={comment.id} className="p-4 border rounded-lg">
                <p className="font-medium">{comment.author}:</p>
                <p className="text-gray-700">{comment.content}</p>
                <div className="flex gap-2 mt-2">
                  <Button className="text-sm">
                    <FaThumbsUp className="mr-1" /> {comment.votes.upvotes}
                  </Button>
                  <Button className="text-sm">
                    <FaThumbsDown className="mr-1" /> {comment.votes.downvotes}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;
