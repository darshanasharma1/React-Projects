import { useEffect, useState } from "react";

export default function PostsApp() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch posts on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  // Filter posts by search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📑 Posts App</h1>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredPosts.map((post) => (
            <li
              key={post.id}
              style={{
                marginBottom: "15px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                background: "#f9f9f9",
              }}
            >
              <h3 style={{ margin: "0 0 8px" }}>{post.title}</h3>
              <p style={{ margin: 0 }}>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
