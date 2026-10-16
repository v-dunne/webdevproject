import { useState, useEffect } from "react";
import { getCommentByPostId, createComment } from "../../Services/CommentService.js";

export default function CommentSection({ postId }) {
  // Local state for comments and the new comment input field
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // load comments for this specific post
  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getCommentByPostId(postId);
        setComments(data);
      } catch (error) {
        console.error("Error loading comments:", error);
        setError("Could not load comments.");
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [postId]);

  // Handle typing in the comment box (Student A User Input)
  const handleInput = (e) => {
    setNewComment(e.target.value);
  };

  // Add new comment on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = newComment.trim();
    if (!text) return;

    try {
      setError("");

      // temp identity until user auth created
      const savedComment = await createComment(
        "guest",
        "You",
        "",
        text,
        postId
      );

      setComments((previousComments) => [
        ...previousComments,
        savedComment,
      ]);

      setNewComment("");
    } catch (error) {
      console.error("Error saving comment:", error);
      setError("Could not post your comment. Please try again.");
    }
  };  

  return (
    <div className="comment-section">
      <h5 className="comment-title">Discussion</h5>

      {loading && <p>Loading comments...</p>}

      {error && <p>{error}</p>}

      <div className="comment-list">
        {comments.map((comment) => {
          const firstName = comment.get("firstName") || "";
          const lastName = comment.get("lastName") || "";
          const author = `${firstName} ${lastName}`.trim() || "Anonymous";

          return (
            <div key={comment.id} className="comment-item">
              <strong>{author}: </strong>
              <span>{comment.get("userComment")}</span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} class="comment-form">
        <input 
          type="text" 
          value={newComment} 
          onInput={handleInput} 
          placeholder="Ask a question or leave a note..." 
          class="comment-input"
        />
        <button type="submit" className="comment-btn" disabled={!newComment.trim()}>Post</button>
      </form>
    </div>
  )
}