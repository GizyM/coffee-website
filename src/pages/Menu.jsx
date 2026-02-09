import React from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, img: "/images/menu-item-1.png", name: "Espresso", price: "$8.99", oldPrice: "20.99" },
    { id: 2, img: "/images/menu-item-2.png", name: "Cappuccino", price: "$9.99", oldPrice: "22.99" },
    { id: 3, img: "/images/menu-item-3.png", name: "Latte", price: "$10.99", oldPrice: "24.99" },
    { id: 4, img: "/images/menu-item-4.png", name: "Mocha", price: "$11.99", oldPrice: "26.99" },
    { id: 5, img: "/images/menu-item-5.png", name: "Americano", price: "$7.99", oldPrice: "19.99" },
    { id: 6, img: "/images/menu-item-6.png", name: "Macchiato", price: "$12.99", oldPrice: "28.99" },
  ];

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        Our Menu
      </h1>

      <div className="menu-items-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />

            <div className="menu-info">
              <h3 className="menu-name">{item.name}</h3>

              <p className="menu-description">
                A delicious cup of joe.
              </p>

              <div className="menu-price">
                {item.price} <span>{item.oldPrice}</span>
              </div>
            </div>

            <button 
            className="btn add-to-cart"
            onClick={() => handleAddToCart(item)}
              >Add to Cart
              </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
