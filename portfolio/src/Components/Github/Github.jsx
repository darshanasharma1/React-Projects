import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-gray-700 text-white text-center py-8 px-4 min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">
        GitHub Followers: <span className="text-yellow-400">{data.followers}</span>
      </h2>

      <div className="flex justify-center mt-6">
        <img
          className="w-40 h-40 rounded-full shadow-lg border-4 border-yellow-400"
          src={data.avatar_url}
          alt={`${data.login}'s GitHub avatar`}
        />
      </div>

      <h3 className="text-2xl font-medium mt-4">{data.login}</h3>

      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200"
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/darshanasharma1');
  
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }
  
  return response.json();
};
