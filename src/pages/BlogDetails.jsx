import React, { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Blog1 from "../assets/images/blog-1.jpg";
import Blog2 from "../assets/images/blog-2.jpg";
import Blog3 from "../assets/images/blog-3.jpg";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = useMemo(
    () => [
      {
        id: 1,
        img: Blog1,
        title: "Tasty and Refreshing Coffee",
        date: "August 15, 2023",
        author: "admin",
        excerpt:
          "Discover the perfect blend of taste and refreshment with our latest coffee recipes and brewing tips.",
        content: [
          "There's something truly magical about a cup of coffee. It's not just a beverage; it's an experience that awakens the senses and brings people together. Whether you prefer a bold espresso, a creamy latte, or a refreshing iced coffee, there's a perfect brew for everyone.",
          "Start your day with a rich and aromatic cup of coffee that energizes you for the day ahead. Explore our collection of coffee recipes and brewing techniques to find your new favorite way to enjoy this beloved drink.",
          "Try experimenting with different coffee beans, brewing methods, and flavor combinations to create your own signature cup of coffee. From classic favorites to innovative creations, the world of coffee is full of endless possibilities.",
          "If you love a crisp finish, try a light roast with fruity and floral notes. For a more robust and full-bodied experience, opt for a dark roast with chocolate and caramel undertones. No matter your preference, there's a coffee out there that will delight your taste buds and keep you coming back for more.",
        ],
      },
      {
        id: 2,
        img: Blog2,
        title: "Exploring Exotic Coffee Flavors",
        date: "August 20, 2023",
        author: "admin",
        excerpt:
          "Join us as we delve into the world of unique and exotic coffee flavors from around the globe.",
        content: [
          "Coffee lovers are always on the lookout for new and exciting flavors. In this blog, we explore some of the most exotic coffee varieties from different regions, each with its own unique taste profile and aroma.",
          "From the fruity and floral notes of Ethiopian coffee to the rich and chocolatey flavors of Colombian beans, there's a world of coffee waiting to be discovered. We'll guide you through the best ways to brew and enjoy these exceptional coffees.",
          "Whether you're a seasoned coffee connoisseur or just starting your journey, these exotic flavors will expand your palate and introduce you to the diverse world of coffee. Get ready to embark on a flavorful adventure that will tantalize your taste buds and inspire your coffee creations.",
          "Look for coffees with unique flavor notes like jasmine, bergamot, or even hints of tropical fruits. These distinctive flavors can add a new dimension to your coffee experience and make each cup a delightful surprise.",
        ],
      },
      {
        id: 3,
        img: Blog3,
        title: "The Art of Coffee Brewing",
        date: "August 25, 2023",
        author: "admin",
        excerpt:
          "Master the art of brewing the perfect cup of coffee with our expert tips and techniques.",
        content: [
          "Brewing the perfect cup of coffee is both an art and a science. It requires attention to detail, the right equipment, and a bit of practice. In this blog, we share expert tips and techniques to help you master the art of coffee brewing.",
          "From the grind size to the water temperature, every step of the brewing process can impact the flavor and aroma of your coffee. We'll cover various brewing methods, including pour-over, French press, and espresso, to help you find the one that suits your taste.",
          "Whether you're looking to enhance your morning routine or impress your friends with your barista skills, these brewing tips will elevate your coffee game and ensure that every cup is a delicious masterpiece.",
          "Remember, the key to great coffee is consistency. Experiment with different variables and find the perfect balance that suits your taste preferences. With practice and patience, you'll be able to brew a cup of coffee that rivals your favorite café.",
        ],
      },
    ],
    [],
  );

  const blogId = Number(id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <section className="blog-details">
        <div className="blog-details__container">
          <button className="blog-details__back" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <h1 className="blog-details__title">Blog Not Found</h1>
          <p className="blog-details__subtitle">
            That blog doesn't exist. Try going back to the blog list.
          </p>

          <Link to="/blogs" className="btn">
            Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-details">
        <div className="blog-details__container">
            <button className="blog-details__back" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <h1 className="blog-details__title">{blog.title}</h1>

            <span className="blog-details__meta">
                by {blog.author} / {blog.date}
                </span>

                <div className="blog-details__image">
                    <img src={blog.img} alt={blog.title} />
                </div>

                <p className="blog-details__excerpt">{blog.excerpt}</p>

                <div className="blog-details__content">
                    {blog.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="blog-details__actions">
                    <Link to="/blogs" className="btn">
                        Back to Blogs
                    </Link>
                </div>
        </div>
    </section>
  );
}

export default BlogDetails;
