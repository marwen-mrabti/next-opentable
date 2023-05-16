import { Review } from "@prisma/client";
import { calcAverageRating } from "./calcAverageRating";

import fullStar from "../public/icons/full-star.png";
import halfStar from "../public/icons/half-star.png";
import emptyStar from "../public/icons/empty-star.png";
import Image from "next/image";

export const renderStars = (reviews: Review[]) => {
  const averageRating = calcAverageRating(reviews);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const difference = parseFloat((averageRating - i).toFixed(1));
    if (difference >= 1) {
      stars.push(
        <span key={i}>
          <Image
            src={fullStar}
            alt="full star"
            width={10}
            className="mr-1 aspect-square h-auto "
          />
        </span>
      );
    } else if (difference < 1 && difference >= 0.3) {
      stars.push(
        <span key={i}>
          <Image
            src={halfStar}
            alt="half star"
            width={10}
            className="mr-1 aspect-square h-auto "
          />
        </span>
      );
    } else {
      stars.push(
        <span key={i}>
          <Image
            src={emptyStar}
            alt="empty star"
            width={10}
            className="mr-1 aspect-square h-auto"
          />
        </span>
      );
    }
  }
  return stars;
};
