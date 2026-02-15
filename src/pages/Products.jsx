import {
    FaShoppingCart,
    FaHeart,
    FaEye,
    FaStar,
    FaStarHalfAlt
} from "react-icons/fa";
import Product1 from "../assets/images/product-1.png";
import Product2 from "../assets/images/product-2.png";
import Product3 from "../assets/images/product-3.png";
import Product4 from "../assets/images/product-4.png";

const Products = () => {
    const products = [
        { id: 1, img: Product1, name: "7 Goals", price: "$10.99", OldPrice: "$20.99" },
        { id: 2, img: Product2, name: "Barista's Choice", price: "$12.99", OldPrice: "$22.99" },
        { id: 3, img: Product3, name: "Adeline Coffee", price: "$14.99", OldPrice: "$24.99" },
        { id: 4, img: Product4, name: "Montana Blend", price: "$16.99", OldPrice: "$26.99" },
    ];

    const handleAddToCart = (product) => {
        console.log("Added to cart:", product);
    };

    const handleFavorite = (product) => {
        console.log("Favorited:", product);
    };

    const handlePreview = (product) => {
        console.log("Preview:", product);
    };

    return (
        <section className="products" id="products">
            <h1 className="heading">
               Our <span> Products</span>
            </h1>

            <div className="product-items-container">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <div className="icons">
                            <button 
                            className="icon-btn"
                            onClick={() => handleAddToCart(product)}>
                                <FaShoppingCart />
                            </button>

                            <button className="icon-btn" onClick={() => handleFavorite(product)}>
                                <FaHeart />
                            </button>

                            <button className="icon-btn" onClick={() => handlePreview(product)}>
                                <FaEye />
                            </button>
                        </div>

                        <div className="image">
                            <img src={product.img} alt={product.name} />
                        </div>

                        <div className="product-info">
                            <h3>{product.name}</h3>

                            <div className="rating-point">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>

                            <div className="product-price">
                                {product.price} <span>{product.OldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;