import { useParams } from "react-router-dom";
import { useState } from "react";
import { categories } from "../assets/data";

const Product = () => {
  const { category, slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // find the product inside the correct category
  const items = categories[category];
  const product = items?.find((p) => p.slug === slug);
  
  const advantageTitles = {
    advantages: "Преимущества",
    general: "Общие преимущества",
    forAdults: "Для взрослых",
    forKids: "Для детей",
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3D1860] text-center">
          Product not found
        </h2>
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(prev => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="bg-gray-50 py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Product Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D1860] mb-1 sm:mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500">SKU: {product.slug}</p>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-3 sm:py-4">
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl font-bold text-[#3D1860]">
                    {product.price || "1,500"} сом
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg sm:text-xl text-gray-400 line-through">
                      {product.oldPrice} сом
                    </span>
                  )}
                </div>
                {product.inStock !== false && (
                  <p className="text-sm sm:text-base text-green-600 font-medium mt-2">✓ В наличии</p>
                )}
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Количество
                  </label>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-[#3D1860] text-[#3D1860] hover:bg-[#3D1860] hover:text-white transition-colors font-bold text-lg sm:text-xl"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 sm:w-20 h-10 sm:h-12 text-center border-2 border-gray-300 rounded-lg font-semibold text-base sm:text-lg"
                    />
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-[#3D1860] text-[#3D1860] hover:bg-[#3D1860] hover:text-white transition-colors font-bold text-lg sm:text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#3D1860] text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#5B2A86] transition-colors shadow-md active:scale-[0.98]"
                >
                  Добавить в корзину
                </button>

                {/* Buy Now Button */}
                <button
                  className="w-full border-2 border-[#3D1860] text-[#3D1860] py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#3D1860] hover:text-white transition-colors active:scale-[0.98]"
                >
                  Купить сейчас
                </button>
              </div>

              {/* Product Features */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2">
                <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold shrink-0">🚚 Доставка:</span>
                  <span>По всему Кыргызстану</span>
                </div>
                <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold shrink-0">💳 Оплата:</span>
                  <span>Наличными или картой</span>
                </div>
                <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold shrink-0">↩️ Возврат:</span>
                  <span>В течение 14 дней</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <div className="flex gap-2 sm:gap-4 px-3 sm:px-6 md:px-8 min-w-max sm:min-w-0">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold transition-colors border-b-2 text-sm sm:text-base whitespace-nowrap ${
                  activeTab === "description"
                    ? "border-[#3D1860] text-[#3D1860]"
                    : "border-transparent text-gray-500 hover:text-[#3D1860]"
                }`}
              >
                Описание
              </button>
              <button
                onClick={() => setActiveTab("advantages")}
                className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold transition-colors border-b-2 text-sm sm:text-base whitespace-nowrap ${
                  activeTab === "advantages"
                    ? "border-[#3D1860] text-[#3D1860]"
                    : "border-transparent text-gray-500 hover:text-[#3D1860]"
                }`}
              >
                Преимущества
              </button>
              {product.why && (
                <button
                  onClick={() => setActiveTab("why")}
                  className={`py-3 sm:py-4 px-3 sm:px-4 font-semibold transition-colors border-b-2 text-sm sm:text-base whitespace-nowrap ${
                    activeTab === "why"
                      ? "border-[#3D1860] text-[#3D1860]"
                      : "border-transparent text-gray-500 hover:text-[#3D1860]"
                  }`}
                >
                  Почему этот товар?
                </button>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3D1860] mb-3 sm:mb-4">
                  Полное описание
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === "advantages" && (
              <div className="space-y-4 sm:space-y-6">
                {/* Advantages - Array format */}
                {Array.isArray(product.advantages) && product.advantages.length > 0 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#3D1860] mb-3 sm:mb-4">
                      Преимущества
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {product.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-[#3D1860] font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 shrink-0">✓</span>
                          <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advantages - Object format with categories */}
                {!Array.isArray(product.advantages) &&
                  product.advantages &&
                  Object.entries(product.advantages).map(([key, list]) =>
                    list?.length > 0 ? (
                      <div key={key}>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#3D1860] mb-3 sm:mb-4">
                          {advantageTitles[key] ?? key}
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {list.map((adv, idx) => (
                            <li key={idx} className="flex items-start gap-2 sm:gap-3">
                              <span className="text-[#3D1860] font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 shrink-0">✓</span>
                              <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null
                  )}
              </div>
            )}

            {activeTab === "why" && product.why && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3D1860] mb-3 sm:mb-4">
                  Почему именно этот товар?
                </h3>
                {Array.isArray(product.why) ? (
                  <ul className="space-y-2 sm:space-y-3">
                    {product.why.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-[#3D1860] font-bold text-lg sm:text-xl mt-0.5 sm:mt-1 shrink-0">✓</span>
                        <span className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">{reason}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {product.why}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;