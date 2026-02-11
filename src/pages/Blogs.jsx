import React from 'react';
import Blog1 from "../assets/images/blog-1.jpg";
import Blog2 from "../assets/images/blog-2.jpg";
import Blog3 from "../assets/images/blog-3.jpg";

const Blogs = () => {
  const blogs = [
    {
      id: 1, 
      img: Blog1,
      title: "Tasty and Refreshing Coffee",
      date: "August 15, 2023",
      author: "admin",
      excerpt: "Discover the perfect blend of taste and refreshment with our latest coffee recipes and brewing tips.",
      href: "#",
    },
    {
      id: 2,
      img: Blog2,
      title: "Exploring Exotic Coffee Flavors",
      date: "August 20, 2023",
      author: "admin",
      excerpt: "Join us as we delve into the world of unique and exotic coffee flavors from around the globe.",
      href: "#",
    },
    {
      id: 3,
      img: Blog3,
      title: "The Art of Coffee Brewing",
      date: "August 25, 2023",
      author: "admin",
      excerpt: "Master the art of brewing the perfect cup of coffee with our expert tips and techniques.",
      href: "#",
    },
  ];


  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        <span>Blogs</span>
        </h1>

        <div className="blogs-list">
          {blogs.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <div className="image">
                <img src={blog.img} alt={blog.title} />
              </div>

              <div className="blog-summarized-content">
                <a href={blog.href} className="blog-title">
                  {blog.title}
                </a>

                <span className="author-timestamp">
                  by {blog.author} / {blog.date}
                </span>

                <p>{blog.excerpt}</p>

                <a href={blog.href} className="btn">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Blogs;
