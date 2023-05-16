import Link from "next/link";
import ResNavbar from "./ResNavbar";
import { Review } from "@prisma/client";
import { calcAverageRating } from "@/utils/calcAverageRating";
import { renderStars } from "@/utils/renderStars";

interface DetailsProps {
  name: string;
  slug: string;
  description: string;
  reviews: Review[];
}

const ResDetails = ({ name, description, slug, reviews }: DetailsProps) => {
  return (
    <>
      <ResNavbar slug={slug} />
      <div className="mt-4 border-b pb-6">
        <h1 className="text-6xl font-bold">{name}</h1>
      </div>

      {!reviews.length ? null : (
        <div className="flex items-end">
          <div className="ratings mt-2 flex items-center">
            <p className="flex">{renderStars(reviews)}</p>
            <p className="ml-3 text-reg"> {calcAverageRating(reviews)} </p>
          </div>
          <div>
            <p className="ml-4 text-reg">
              {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
            </p>
          </div>
        </div>
      )}

      <div className="mt-4">
        <p className="text-lg font-light">{description}</p>
      </div>
    </>
  );
};

export default ResDetails;
