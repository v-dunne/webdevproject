import { useState, useEffect } from "react";
import { getAllPosts } from "../../Services/PostService.js";
import FeedList from "./FeedList.jsx";

/**
 * The Home component, which displays the feed of meals and allows users to filter, search, like, and request swaps for meals.
 * @returns {JSX.Element} The Home component.
 */
function Home() {
  // State variables
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [transactionType, setTransactionType] = useState("All"); 
  const [query, setQuery] = useState("");
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load posts from Parse when component mounts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
        setError("Could not load posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Updates filter when user selects different option
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Updates transaction type when user selects different option
  const handleTransactionChange = (e) => {
    setTransactionType(e.target.value);
  };

  // Updates search query when user types
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Adds/removes post from user's liked posts
  const handleLike = (postId) => {
    if (likes.includes(postId)) {
      setLikes(likes.filter((id) => id !== postId));
    } else {
      setLikes([...likes, postId]);
    }
  };

  // Add or verify this handler in Feed.js:
  const handleSwapRequest = (postId, cookName) => {
    alert(`Swap request sent to ${cookName} for meal ID ${postId}!`);
  };

  // Filter posts using fileds from parse post objects
  const filteredMeals = posts.filter((post) => {
    const dietaryTags = post.get("dietaryTags") || [];
    const title = post.get("title") || "";
    const cookName = post.get("cookName") || "";
    // const postTransactionType = post.get("transactionType");

    if (filter !== "All" && !dietaryTags.includes(filter)) {
      return false;
    }

    if (
      query.trim() !== "" && !title.toLowerCase().includes(query.toLowerCase()) && !cookName.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  if (loading) {
    return <p>Loading posts...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="feed">
      <h1>Campus Food Feed</h1>
      <p>See what people are cooking around campus!</p>

      <hr />

      <label htmlFor="dietary-filter">Filter Meals: </label>

      <select id="dietary-filter" value={filter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="High-Protein">High-Protein</option>
        <option value="Nut-Free">Nut-Free</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
      </select>

      <br />

      <label htmlFor="transaction-filter">Transaction Type: </label>

      <select id="transaction-filter" value={transactionType} onChange={handleTransactionChange}>
        <option value="All">All</option>
        <option value="Swap Only">Swap Only</option>
        <option value="Sell Only">Sell Only</option>
        <option value="Swap or Sell">Swap or Sell</option>
      </select>

      <br />
      <hr />

      <label htmlFor="meal-search">Search Meals or Cooks: </label>

      <input
        id="meal-search"
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search"
      />

      <hr />

    <FeedList 
      meals={filteredMeals} 
      likes={likes} 
      onLike={handleLike} 
      onRequestSwap={handleSwapRequest} 
    />
  </div>
  );
}

export default Home;