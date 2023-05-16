import Link from "next/link";

interface ReservationCardProps {
  slug: string;
}

const ReservationCard = ({ slug }: ReservationCardProps) => {
  return (
    <div className="fixed w-[20%] rounded bg-white p-2 shadow">
      <div className="border-b pb-2 text-center font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col border-b ">
        <label htmlFor="">Party size</label>
        <select name="" className="py-3 font-light" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between border-b ">
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Date</label>
          <input type="text" className="w-28  py-3 font-light" />
        </div>
        <div className="flex w-[48%] flex-col border-b">
          <label htmlFor="">Time</label>
          <select name="" id="" className=" py-3 font-light">
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <Link
          href={`/reserve/${slug}`}
          className="flex h-16 w-full cursor-pointer items-center justify-center rounded bg-red-600 px-4  font-bold  text-white transition-all duration-200 ease-in-out hover:bg-red-500"
        >
          Find a Time
        </Link>
      </div>
    </div>
  );
};

export default ReservationCard;
