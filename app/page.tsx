import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-lg md:text-2xl font-bold text-[#004c41] uppercase tracking-wide mb-8">
            REVOLUTIONARY PLANT-BASED PROTEINS THAT DEFY EXPECTATIONS
          </h1>
        </div>

        {/* Products Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProductCard
            title="Beyond Steak"
            description="Juicy, tender plant-based steak strips that deliver the authentic taste and texture you crave. Made with simple, clean ingredients."
            imageSrc="/image1.png"
            imageAlt="Beyond Meat Steak Product"
          />
          <ProductCard
            title="Beyond Lobster"
            description="Succulent plant-based lobster pieces with the delicate sweetness and firm texture of premium seafood. Perfect for elegant dining."
            imageSrc="/image2.png"
            imageAlt="Beyond Meat Lobster Product"
            certification="U"
          />
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-8 rounded-lg shadow-lg">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-black uppercase tracking-wide mb-4">
              CRAVE THE UNEXPECTED. BEYOND MEAT.™
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Experience the future of food with our innovative plant-based proteins. Crafted with precision and passion, our products deliver the taste, texture, and satisfaction you expect from premium proteins—all while being better for you and the planet.
            </p>
          </div>

          <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded font-medium uppercase transition-colors">
            BUY NOW
          </button>
        </div>
      </main>
    </div>
  );
}
