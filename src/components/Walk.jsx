import Cards from "./Cards";
import { categories } from "../assets/data";

const Walk = () => {
  return (
    <div className="bg-[#F5EDF7] py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D1860] text-center mb-6 md:mb-8">
          Товары для прогулок
        </h2>
        <Cards cardData={categories.walk} category="walk" />
      </div>
    </div>
  );
};

export default Walk;