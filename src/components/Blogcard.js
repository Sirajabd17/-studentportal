const BlogCard = ({ blogInfo }) => {
  return (
    <>
      <div className=" w-1/3 text-left    border-2  rounded-lg">
        <img
          src={blogInfo.img}
          className=" w-full hover:scale-105 duration-200 "
          alt="Instructor image"
        />
        <h1 className=" text-3xl my-4 px-4  hover:text-yellow-500">
          {blogInfo.name}
        </h1>
        <h1 className=" text-gray-500 mb-4 px-4">{blogInfo.domain}</h1>
      </div>
    </>
  );
};

export default BlogCard;
