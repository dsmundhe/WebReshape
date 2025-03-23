import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image: "https://i.pinimg.com/736x/63/0c/4d/630c4de5e2db2f3f325410a9d70e43bd.jpg",
    bio: "Passionate blogger sharing insights on technology, coding, and AI.",
    summary: `I am a dedicated tech blogger, writing about the latest trends in web 
    development, AI, and software engineering. With years of experience in coding and 
    content creation, I strive to provide valuable insights, tutorials, and guides for 
    developers and tech enthusiasts. My articles cover a range of topics, including JavaScript, 
    React, MERN stack, and the ever-evolving world of artificial intelligence.`,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUserData((prev) => ({
        ...prev,
        name: storedUser.name || "User Name", // Fallback to default
        email: storedUser.email || "user@example.com", // Fallback to default
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        name: "Guest User",
        email: "guest@example.com",
      }));
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8  rounded-2xl">
      {/* Profile Header */}
      <div className="flex flex-col items-center p-6  rounded-xl shadow-md">
        <img
          src={userData.image}
          alt={userData.name}
          className="w-32 h-32 rounded-full border-4 border-blue-500  transform hover:scale-105 transition duration-300"
        />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">{userData.name}</h1>
        <p className="text-lg text-gray-600">{userData.email}</p>
      </div>

      {/* Bio Section */}
      <div className="mt-6 p-6e rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-blue-700">About Me</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">{userData.bio}</p>
      </div>

      {/* Blogger Summary */}
      <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-700  rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center">My Blogging Journey</h2>
        <p className="mt-3 leading-relaxed text-lg">{userData.summary}</p>
      </div>
    </div>
  );
};

export default Profile;
