// create operation - create a comment for post
export const createComment = (
    userId,
    firstName,
    lastName,
    userComment,
    postId
) => {
    const Comment = Parse.Object.extend("Comment");
    const comment = new Comment();

    const Post = Parse.Object.extend("Post");
    const post = new Post();
    post.id = postId;

    comment.set("userId", userId);
    comment.set("firstName", firstName);
    comment.set("lastName", lastName);
    comment.set("userComment", userComment);
    comment.set("postPointer", post);

    return comment.save().then((result) => {
        return result;
    });
};

// read operation - get comment by id
export const getCommentById = (id) => {
    const Comment = Parse.Object.extend("Comment");
    const query = new Parse.Query(Comment);

    return query.get(id).then((result) => {
        return result;
    });
};

// read operation - get comment by id
export const getCommentByPostId = (postId) => {
    const Comment = Parse.Object.extend("Comment");
    const query = new Parse.Query(Comment);

    const Post = Parse.Object.extend("Post");
    const post = new Post();
    post.id = postId;

    query.equalTo("postPointer", post);
    query.ascending("createdAt");

    return query.find().then((results) => {
        return results
    })
}