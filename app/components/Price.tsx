import { PRICE } from "@prisma/client";
interface PriceProps {
  price: string;
}

const Price = ({ price }: PriceProps) => {
  const renderPrice = () => {
    if (price == PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price == PRICE.REGULAR) {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else if (price == PRICE.EXPENSIVE) {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };
  return <p className="mr-3 flex font-bold"> {renderPrice()} </p>;
};

export default Price;
