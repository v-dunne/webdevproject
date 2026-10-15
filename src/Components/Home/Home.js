import React, { useState, useEffect } from "react";
// import { getAllLessons, Lessons } from "/src/Services/ParseService.js";
import FeedList from "./FeedList";
// import useFetch from "../../Services/useFetch.js";
import { useParams } from "react-router-dom";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Home = () => {
  // const data = useFetch("https://jsonplaceholder.typicode.com/todos/");
  // console.log("data: ", data);
  // Variables in the state to hold data
  const [meals, setMeals] = useState([]);  // Stores meal data loaded from JSON file
  const [filter, setFilter] = useState("All");   // Stores dietary tag selected by user
  const [transactionType, setTransactionType] = useState("All");   // Stores transaction type selected by user
  const [query, setQuery] = useState("");   // Stores text entered in search box
  const [likes, setLikes] = useState([]);   // Stores meals that user liked
  const { id } = useParams();  // Get the user ID from the URL parameters
   

  // UseEffect to run when the page loads to
  // obtain async data and render

  // Loads meal data when Feed component is first rendered
  useEffect(() => {
    const loadMeals = async () => {
      const data = await getMealFeed();

      setMeals(data);
    };

    loadMeals();
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

  // Adds/removes meal from user's liked meals
  const handleLike = (mealId) => {
    if (likes.includes(mealId)) {
      setLikes(likes.filter((id) => id !== mealId));
    } else {
      setLikes([...likes, mealId]);
    }
  };

  // Add or verify this handler in Home.js:
  const handleSwapRequest = (mealId, cookName) => {
    alert(`Swap request sent to ${cookName} for meal ID ${mealId}!`);
  };

  // Initialized to "All" meals
  let filteredMeals = meals;

  // Filter by dietary tag
  if (filter !== "All") {
    filteredMeals = filteredMeals.filter((user) => {
      return user.mealListing.dietaryTags.includes(filter);
    });
  }

  // Filter by transaction type
  if (transactionType !== "All") {
    filteredMeals = filteredMeals.filter((user) => {
      return user.mealListing.transactionType === transactionType;
    });
  }

  // Filter by search query
  if (query !== "") {
    filteredMeals = filteredMeals.filter((user) => {
      return (
        user.mealListing.title.toLowerCase().includes(query.toLowerCase()) ||
        user.cookName.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  // add return later - not sure if we keep html `` style or ()
  return (
    <div>
      This is the main stateful parent component.
    </div>
  );
};

export default Home;
