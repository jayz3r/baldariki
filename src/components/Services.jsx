const Services = () => {
  return (
    <div className="bg-[#3D1860] text-[#F5EDF7] py-3 md:py-6 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center max-w-4xl gap-10">
          
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center leading-snug">
            Быть родителем сложно, но так приятно! Когда родители в ресурсе – ребенок счастлив! Что мы предлагаем?
          </h2>

          {/* Services List */}
          <ul className="space-y-6 w-full md:w-auto">
            {[
              "Товары для детей – в помощь родителям (товары-помогаторы);",
              "Товары для безопасности и комфорта;",
              "Магазин с осознанным подходом."
            ].map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-center "
              >
                <span className="shrink-0 mt-1 mr-3 text-purple-300 text-2xl">✓</span>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
