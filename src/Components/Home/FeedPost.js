import React from "react";
import PostActions from "./PostActions.js";
import CommentSection from "./CommentSection.js";

// Food post component
export default function FeedPost({
  user,
  meal,
  onRequestSwap,
  onLike,
  isLiked,
}) {
  if (!meal) return null;

  return html`
    <div class="food-post-card">
      <div class="cook-header">
        <div>
          <h3>${user.cookName}</h3>
          <span class="location">${user.location}</span>
        </div>
      </div>

      <img src=${meal.imageUrl} alt=${meal.title} class="meal-image" />

      <div class="card-content">
        <h4>${meal.title}</h4>
        <p>${meal.description}</p>
        <div class="tags">
          ${meal.dietaryTags?.map(
            (tag) => html`
              <span class="tag-pill">${tag}</span>
              ${" "}
            `
          )}
        </div>
      </div>

      <${PostActions}
        mealId=${meal.mealId || user.id}
        cookName=${user.cookName}
        isLiked=${isLiked}
        onLike=${onLike}
        onRequestSwap=${onRequestSwap}
      />

      <${CommentSection} />
    </div>
  `;
}
