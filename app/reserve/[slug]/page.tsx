"use client";

import ReserveForm from "@/app/reserve/[slug]/components/ReserveForm";
import ReserveHeader from "@/app/reserve/[slug]/components/ReserveHeader";

const page = () => {
  return (
    <div className="h-full border-t bg-white">
      <div className="m-auto w-3/5 py-9">
        <ReserveHeader />
        <ReserveForm />
      </div>
    </div>
  );
};

export default page;
