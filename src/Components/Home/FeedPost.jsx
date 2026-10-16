import PostActions from "./PostActions.jsx";
import CommentSection from "./CommentSection.jsx";

// Food post component
export default function FeedPost({
  post,
  onRequestSwap,
  onLike,
  isLiked,
}) {
  const postId = post.id;
  const cookName = post.get("cookName") || "Unknown cook";
  const location = post.get("loaction") || "";
  const imageUrl = post.get(imageUrl);
  const title = post.get("title") || "Untitled meal";
  const description = post.get("description") || "";
  const dietaryTags = post.get("dietaryTags") || [];

  return (
    <div className="food-post-card">
      <div className="cook-header">
        <div>
          <h3>{cookName}</h3>
          <span className="location">{location}</span>
        </div>
      </div>

      {imageUrl && (
        <img src={imageUrl} alt={title} className="meal-image" />
      )}

      <div className="card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tags">
          {dietaryTags.map(
            (tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            )
          )}
        </div>
      </div>

      <PostActions
        postId={postId}
        cookName={cookName}
        isLiked={isLiked}
        onLike={onLike}
        onRequestSwap={onRequestSwap}
      />

      <CommentSection postId={postId} />
    </div>
  )
}
