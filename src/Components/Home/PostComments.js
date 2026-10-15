import React, { useState } from "react";

export default function CommentSection() {
  // Local state for comments and the new comment input field
  const [comments, setComments] = useState([
    { id: 1, author: "Alex", text: "Is this gluten-free?" },
    { id: 2, author: "Sam", text: "Looks amazing! What time is pickup?" }
  ]);
  const [newComment, setNewComment] = useState("");

  // Handle typing in the comment box (Student A User Input)
  const handleInput = (e) => {
    setNewComment(e.target.value);
  };

  // Add new comment on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const entry = {
      id: Date.now(),
      author: "You",
      text: newComment.trim()
    };

    setComments([...comments, entry]);
    setNewComment(""); // Clear input field
  };

  return html`
    <div class="comment-section">
      <h5 class="comment-title">Discussion</h5>

      <div class="comment-list">
        ${comments.map((item) => html`
          <div key=${item.id} class="comment-item">
            <strong>${item.author}: </strong>
            <span>${item.text}</span>
          </div>
        `)}
      </div>

      <form onSubmit=${handleSubmit} class="comment-form">
        <input 
          type="text" 
          value=${newComment} 
          onInput=${handleInput} 
          placeholder="Ask a question or leave a note..." 
          class="comment-input"
        />
        <button type="submit" class="comment-btn">Post</button>
      </form>
    </div>
  `;
}