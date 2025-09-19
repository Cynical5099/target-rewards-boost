import targetCartImage from "@/assets/target-cart.jpg";
import homeGoodsImage from "@/assets/home-goods.jpg";
import snacksImage from "@/assets/snacks.jpg";

const LifestyleSection = () => {
  const handleImageClick = () => {
    window.open("https://uplevelrewarded.com/aff_c?offer_id=250&aff_id=21664&source=tt", "_blank");
  };

  const images = [
    {
      src: targetCartImage,
      alt: "Target shopping cart with products",
      label: "Shopping Cart",
    },
    {
      src: homeGoodsImage,
      alt: "Home goods and decor",
      label: "Home Goods",
    },
    {
      src: snacksImage,
      alt: "Delicious snacks and treats",
      label: "Snacks & Treats",
    },
  ];

  return (
    <section className="bg-accent/30 px-4 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="mb-8 text-center text-xl font-bold text-foreground">
          🏠 What would you grab first with your Target rewards?
        </h2>
        
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-card transition-smooth hover:shadow-lg hover:scale-[1.02]"
              onClick={handleImageClick}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="bg-card p-2 text-center">
                <p className="text-xs font-medium text-card-foreground">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;