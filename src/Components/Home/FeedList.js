import React from 'react';
import FeedPost from "./FeedPost.js";

export default function FeedList({ meals, likes, onLike, onRequestSwap }) {
  return html`
    <div class="feed-posts">
      ${meals.map((user) => {
        // Data Down calculation: check if current meal ID is in likes array
        const mealId = user.mealListing?.mealId || user.id;
        const isLiked = likes.includes(mealId);

        return html`
          <${FoodPost}
            key=${user.id}
            user=${user}
            meal=${user.mealListing}
            isLiked=${isLiked}
            onLike=${onLike}
            onRequestSwap=${onRequestSwap}
          />
        `;
      })}
    </div>
  `;
}