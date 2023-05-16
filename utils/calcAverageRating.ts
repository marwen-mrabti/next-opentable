import { Review } from "@prisma/client";

export const calcAverageRating = (reviews: Review[]) => {
  if (!reviews.length) return 0;

  const total = reviews.reduce((acc: number, review: Review) => {
    return acc + review.rating;
  }, 0);
  return total / reviews.length;
};
