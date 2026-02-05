import Cards from "./Cards";
import { categories } from "../assets/data";

const Helpers = () => {
  return (
    <div className="bg-[#F5EDF7] py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D1860] text-center mb-2 md:mb-4">
          Товары-помогаторы
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3D1860] text-center mb-6 md:mb-8">
          Товары для кормления
        </h3>
        <Cards cardData={categories.helpers} category="helpers" />
      </div>
    </div>
  );
};

export default Helpers;