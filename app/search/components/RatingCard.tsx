import { calcAverageRating } from "@/utils/calcAverageRating";
import { renderStars } from "@/utils/renderStars";
import { Review } from "@prisma/client";
import React from "react";

const RatingCard = ({ reviews }: { reviews: Review[] }) => {
  const averageRating = calcAverageRating(reviews);

  const renderLabel = () => {
    return averageRating > 4
      ? "Excellent"
      : averageRating <= 4 && averageRating >= 3
      ? "Very Good"
      : averageRating <= 3 && averageRating >= 0
      ? "Average"
      : "";
  };

  return (
    <>
      {reviews.length === 0 ? (
        <span>no reviews</span>
      ) : (
        <>
          <div className="mb-2 flex">{renderStars(reviews)}</div>
          <p className="ml-2 text-sm">{renderLabel()}</p>
        </>
      )}
    </>
  );
};

export default RatingCard;
