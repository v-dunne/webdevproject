import React from "react";

export default function PostActions({ mealId, cookName, isLiked, onLike, onRequestSwap }) {
  return `
  <div class="post-actions">
    <button 
      class="like-btn ${isLiked ? 'liked' : ''}" 
      onClick=${() => onLike(mealId)}
    >
      ${isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
    <button 
      class="swap-btn" 
      onClick=${() => onRequestSwap(mealId, cookName)}
    >
      Request Swap 🔄
    </button>
  </div>
  `;
}