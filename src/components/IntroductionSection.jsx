const IntroductionSection = () => {
  return (
    <section className="min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center text-center bg-linear-to-br from-purple-100 to-purple-50 px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D1860] mb-4 md:mb-6 leading-tight">
        Baldarik Store – магазин осознанного родительства 💜
      </h1>

      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 font-medium">
        Везде для детей, а у нас для родителей!
      </h2>
    </section>
  );
};

export default IntroductionSection;