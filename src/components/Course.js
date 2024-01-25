import CourseCard from "./Coursecard";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  const ShowAllCourse = () => {
    navigate("/coursepage");
  };

  const courseDetails = [
    {
      id: 1,
      img: "full-stack.jpg",
      course: "Full-stack Web Developer",
      user: "3.5 k",
      view: "12 k",
      rating: 5.0,
      price: "$99.00",
    },
    {
      id: 2,
      img: "design.jpg",
      course: "UX/UI Design",
      user: "3 k",
      view: "11 k",
      rating: 5.0,
      price: "$49.00",
    },
    {
      id: 3,
      img: "js.jpg",
      course: "Modern JavaScript",
      user: "2.5 k",
      view: "18 k",
      rating: 4.0,
      price: "$19.00",
    },
    {
      id: 4,
      img: "business.jpg",
      course: "Business Development",
      user: "1.5 k",
      view: "15 k",
      rating: 4.5,
      price: "$19.00",
    },
    {
      id: 5,
      img: "marketing.jpg",
      course: "Email Marketing 101",
      user: "1.9 k",
      view: "5 k",
      rating: 5.0,
      price: "$69.00",
    },
    {
      id: 6,
      img: "python.jpg",
      course: "Getting Started with Python",
      user: "1.2 k",
      view: "13 k",
      rating: 3.5,
      price: "$9.00",
    },
  ];

  return (
    <>
      <div className="container   mx-auto  p-4 my-32 ">
        <div>
          <h1 className="text-center text-4xl text-gray-600 font-bold">
            Popular Courses
          </h1>
          <p className="text-center mt-4 mb-32">
            eStore UI Kit comes with all essential features, sections and
            elements you need to design and develop web UI efficiently.
          </p>
        </div>

        <div className=" flex flex-wrap sm:mx-28 gap-8">
          {courseDetails.map((item) => (
            <CourseCard key={item.id} detail={item} />
          ))}
          {/* Other components and content */}
        </div>
        <div className="flex justify-center">
          <button
            onClick={ShowAllCourse}
            className="text-center text-xl  my-16 rounded-full border-2 border-yellow-500 py-4 px-8 hover:text-yellow-500"
          >
            {" "}
            View All Course{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default Course;
