import Parse from "parse";

// create operation - to create new post
export const createPost = (
    userId,
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
    swapPreference
) => {
    const Post = Parse.Object.extend("Post");
    const post = new Post();

    post.set("userId", userId);
    post.set("cookName", cookName);
    post.set("location", location);
    post.set("mealId", mealId);
    post.set("title", title);
    post.set("description", description);
    post.set("imageUrl", imageUrl);
    post.set("dietaryTags", dietaryTags);
    post.set("servingsAvailable", servingsAvailable);
    post.set("prepDate", prepDate);
    post.set("transactionType", transactionType);
    post.set("swapPreference", swapPreference);

    return post.save().then((result) => {
        return result;
    });
};

// read operation - get post by id
export const getPostById = (id) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);

    return query.get(id).then((result) => {
        return result;
    });
};

// read operation - get all posts
export const getMealFeed = () => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);

    query.descending("createdAt");

    return query.find().then((results) => {
        return results;
    });
};

// read operation - get posts by dietary tag
export const getMealsByTag = (tag) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);

    if (tag && tag !== "All") {
        query.equalTo("dietaryTags", tag);
    }

    query.descending("createdAt");

    return query.find().then((results) => {
        return results;
    });
};

// read operation - get posts by user id
export const getUserMealsById = (userId) => {
    const Post = Parse.Object.extend("Post");
    const query = new Parse.Query(Post);

    query.equalTo("userId", userId);
    query.descending("createdAt");

    return query.find().then((results) => {
        return results;
    });
};