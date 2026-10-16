import Parse from "parse";

const Comment = Parse.Object.extend("Comment");

// CREATE - create a comment associated with a post.
export const createComment = ({
  userId, // This is the temporary userId string. In the future, we may want to get the userId from the current user session and make this a pointer to the _User class instead of a string.
  firstName,
  lastName,
  userComment,
  postId,
}) => {
  if (!postId) {
    throw new Error("A post ID is required to create a comment.");
  }
  

  // Creates a lightweight pointer to the post object
  const post = Parse.Object.createWithoutData("Post", postId);
  const comment = new Comment({
    userId,
    firstName,
    lastName,
    userComment,
    postPointer: post,
  });

  return comment.save();
};


// READ - read a comment by its Parse object ID.
export const getCommentById = (id) => {
  if (!id) {
    throw new Error("A comment ID is required.");
  }

  return new Parse.Query(Comment).get(id);
};


// READ - read comments for a post, oldest first.
export const getCommentsByPostId = (postId) => {
  if (!postId) {
    throw new Error("A post ID is required.");
  }

  const post = Parse.Object.createWithoutData("Post", postId);

  return new Parse.Query(Comment)
    .equalTo("postPointer", post)
    .ascending("createdAt")
    .find();
};