export default function PostActions({ postId, cookName, isLiked, onLike, onRequestSwap }) {
  return (
  <div className="post-actions">
    <button 
      className={`like-btn ${isLiked ? "liked" : ""}`} 
      onClick={() => onLike(postId)}
    >
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
    <button 
      className="swap-btn" 
      onClick={() => onRequestSwap(postId, cookName)}
    >
      Request Swap 🔄
    </button>
  </div>
  )
}