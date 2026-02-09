import {
    FaShoppingCart,
    FaHeart,
    FaEye,
    FaStar,
    FaStarHalfAlt
} from "react-icons/fa";

const Products = () => {
    const products = [
        { id: 1, img: "/images/product-1.png", name: "Product 1", price: "$10.99" },
        { id: 2, img: "/images/product-2.png", name: "Product 2", price: "$12.99" },
        { id: 3, img: "/images/product-3.png", name: "Product 3", price: "$14.99" },
        { id: 4, img: "/images/product-4.png", name: "Product 4", price: "$16.99" },
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
                <span>Our Products</span>
            </h1>

            <div className="product-items-container">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <div className="icons">
                            <button onClick={() => handleAddToCart(product)}>
                                <FaShoppingCart />
                            </button>

                            <button onClick={() => handleFavorite(product)}>
                                <FaHeart />
                            </button>

                            <button onClick={() => handlePreview(product)}>
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