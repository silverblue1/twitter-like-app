import { useState, useEffect } from "react";

import StatusList from "./StatusList";

import '../styles/App.css';

function App() {

  const [post, setPost] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      post: "Post your status here!",
      likes: 3
    },
    {
      id: 2,
      post: "You can use emojis 👋",
      likes: 5
    },
    {
      id: 3,
      post: "Try using #hashtags!",
      likes: 2
    },
    {
      id: 4,
      post: "Share your thoughts freely!",
      likes: 9
    }
  ]);

  const [postId, setPostId] = useState(5);

  const [query, setQuery] = useState("");

  const [queriedPosts, setQueriedPosts] = useState([]);

  const handleChange = (e) => {
    setPost(e.target.value);
  }

  const addPost = (e) => {
    e.preventDefault();
    if(post) {
      const newPost = {
        id: postId,
        post: post,
        likes: Math.floor(Math.random(0, 10) * 10)
      };
      setPosts(posts => ([...posts, newPost]));
      setPostId(postId => (postId+1));
      setPost("");
    }
  }

  const searchPosts = (term) => {
    return posts.filter(post => post.post.toLowerCase().indexOf(term) > -1)
  }

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    setQueriedPosts(searchPosts(query));
  }, [query])

  return (
    <div className="App">
      <div className="container">
        <input 
        className="search_bar" 
        type="search" 
        placeholder="Search posts..." 
        onChange={handleQuery}
        />
        <h3>Share your status:</h3>
        <textarea 
        rows={6}
        cols={26}
        value={post}
        onChange={handleChange}
        className="post_status"
        />
        <br/>
        <button className="btn_post_status" onClick={addPost}>Post status</button>
        <br/>
        {
          query ? <StatusList posts={queriedPosts} /> : <StatusList posts={posts} /> 
        }
      </div>
    </div>
  );
}

export default App;
