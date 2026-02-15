import React from 'react';
import Menu1 from "../assets/images/menu-1.png"
import Menu2 from "../assets/images/menu-2.png";
import Menu3 from "../assets/images/menu-3.png";
import Menu4 from "../assets/images/menu-4.png";
import Menu5 from "../assets/images/menu-5.png";
import Menu6 from "../assets/images/menu-6.png";


const Menu = () => {
  const menuItems = [
    { id: 1, img: Menu1, name: "Espresso", price: "$8.99", oldPrice: "20.99" },
    { id: 2, img: Menu2, name: "Cappuccino", price: "$9.99", oldPrice: "22.99" },
    { id: 3, img: Menu3, name: "Latte", price: "$10.99", oldPrice: "24.99" },
    { id: 4, img: Menu4, name: "Mocha", price: "$11.99", oldPrice: "26.99" },
    { id: 5, img: Menu5, name: "Americano", price: "$7.99", oldPrice: "19.99" },
    { id: 6, img: Menu6, name: "Macchiato", price: "$12.99", oldPrice: "28.99" },
  ];

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        Our <span>Menu</span>
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
