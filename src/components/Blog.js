import BlogCard from "./Blogcard";
const Blog = () => {
  const blogInfo = [
    {
      id: 1,
      name: "Modern website design tools",
      img: "https://preview.uideck.com/items/learn/assets/images/blog/blog-1.jpg",
      domain:
        "I Learning Analytics is a process to analyze the learners which improves the educational performance",
    },
    {
      id: 2,
      name: "How To install SSL",
      img: "https://preview.uideck.com/items/learn/assets/images/blog/blog-2.jpg",
      domain:
        "I Learning Analytics is a process to analyze the learners which improves the educational performance",
    },
    {
      id: 3,
      name: "Getting started with Figma",
      img: "https://preview.uideck.com/items/learn/assets/images/blog/blog-3.jpg",
      domain:
        "I Learning Analytics is a process to analyze the learners which improves the educational performance",
    },
  ];
  return (
    <>
      <div id="Blog" className="container    max-w-5xl mx-auto  p-4 mb-32 ">
        <div>
          <h1 className=" text-4xl mt-32 text-gray-600 font-bold">
            From The Blog
          </h1>
          <p className=" mt-4 mb-16">
            eStore UI Kit comes with all essential features, sections and
            elements you need to design and develop web UI efficiently.
          </p>
        </div>
        <div className="sm:flex  gap-4">
          {blogInfo.map((data) => (
            <BlogCard key={data.id} blogInfo={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
