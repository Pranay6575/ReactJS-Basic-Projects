const Herosection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <div className="hero-text">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        </div>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shop">
          <p>Also Available On</p>
        </div>
        <div className="brand-logo">
          <img src="/images/flipkart.svg" alt="flipkart logo" />
          <img src="/images/amazon.svg" alt="amazon logo" />
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.svg" alt="shoe-image" className="shoe-image"/>
      </div>
    </main>
  );
};

export default Herosection;
