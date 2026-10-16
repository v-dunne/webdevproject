import FeedPost from "./FeedPost.jsx";

export default function FeedList({ meals, likes, onLike, onRequestSwap }) {
  return (
    <div className="feed-posts">
      {meals.map((post) => {
        const postId = post.id;
        const isLiked = likes.includes(postId);

        return (
          <FeedPost 
            key={postId} 
            post={post} 
            isLiked={isLiked} 
            onLike={onLike} 
            onRequestSwap={onRequestSwap}
          />
        )
      })}
    </div>
  );
}