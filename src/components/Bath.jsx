import Cards from "./Cards";
import { categories } from "../assets/data";

const Bath = () => {
  return (
    <div className="bg-white py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D1860] text-center mb-6 md:mb-8">
          Товары для ванной
        </h2>
        <Cards cardData={categories.bath} category="bath" />
      </div>
    </div>
  );
};

export default Bath;