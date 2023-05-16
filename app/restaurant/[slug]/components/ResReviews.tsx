import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

const ResReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h1 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        What {reviews.length}{" "}
        {reviews.length === 1 ? "person is" : "people are"} saying
      </h1>
      <div>
        {reviews.length === 0 ? (
          <div className="flex w-full items-center justify-center">
            <h3 className="text-lg font-bold text-orange-400">no reviews</h3>
          </div>
        ) : (
          <ul className="flex flex-col">
            {reviews.map((review) => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResReviews;
