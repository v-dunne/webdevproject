import Parse from "parse";

const Post = Parse.Object.extend("Post");

// CREATE - create a new post
export const createPost = async ({
  userID, // In the future, we may want to get the userId from the current user session and make this a pointer to the _User class instead of a string.
  cookName,
  location,
  mealId,
  title,
  description,
  imageUrl,
  dietaryTags,
  servingsAvailable,
  prepDate,
  transactionType,
  swapPreference,
}) => {
  if (!userID) {
    throw new Error("userID is required to create a post.");
  }

  const post = new Post({
    userID,
    cookName,
    location,
    mealId,
    title,
    description,
    imageUrl,
    dietaryTags,
    servingsAvailable,
    prepDate,
    transactionType,
    swapPreference,
  });

  return post.save();
};

// READ - get a post by its ID
export const getPostById = (id) => {
  if (!id) {
    throw new Error("A post ID is required.");
  }

  return new Parse.Query(Post).get(id);
};

// READ - get all posts, sorted by creation date (newest first)
export const getAllPosts = () => {
  return new Parse.Query(Post).descending("createdAt").find();
};

// READ - read posts containing a dietary tag, newest first.
export const getMealsByTag = (tag) => {
  const query = new Parse.Query(Post).descending("createdAt");

  if (tag && tag !== "All") {
    query.equalTo("dietaryTags", tag);
  }

  return query.find();
};

// *** THIS FUNCTION IS NOT CURRENTLY USED IN THE APP, NEEDS REFACTORING WHEN FIX THE USER PROFILE ISSUE ***
// READ - read posts belonging to a UserProfile pointer, newest first.
export const getPostsByProfile = (userId) => {
  if (!userId) {
    throw new Error("userId is required.");
  }

  return new Parse.Query(Post)
    .equalTo("userID", userId) // Assuming userID is a string field in the Post class
    .descending("createdAt")
    .find();
};