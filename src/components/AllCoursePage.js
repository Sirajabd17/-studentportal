import { useNavigate } from "react-router-dom";
import { MAIN_COURSE_PAGE_IMG_URL } from "../utils/constant";

const AllCourses = () => {
  const navToHome = useNavigate();
  const goToHome = () => {
    navToHome("/");
  };
  return (
    <>
      <div>
        <div
          className="bg-center  relative pt-200 bg-no-repeat bg-cover pt-96 h-screen w-full"
          style={{
            backgroundImage:
              "url('https://preview.uideck.com/items/learn/assets/images/video-bg.jpg')",
          }}
        >
          <div className="z-10 text-center ">
            <h1 className="text-6xl font-bold text-white mb-3">
              Course Single
            </h1>
            <button
              onClick={goToHome}
              className="text-center text-2xl text-white "
            >
              {" "}
              Home /{" "}
            </button>

            <span className="text-2xl text-yellow-500"> Course Single </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto  p-4 my-20">
        <div className="flex  gap-8">
          <div className="w-2/3 ">
            <h1 className="text-3xl font-bold my-3"> Modern JavaScript</h1>
            <h1 className="text-lg">
              {" "}
              Modern Javascript highly demanded course across all software
              industry.
            </h1>
            <img
              className="w-4/5 my-4"
              src={MAIN_COURSE_PAGE_IMG_URL}
              alt="modern js img"
            />
            <h1 className="text-3xl font-bold my-3">DESCRIPTION </h1>
            <p className="text-lg">
              Modern JavaScript has come a long way from its humble beginnings
              as a simple scripting language. It has evolved into a powerful,
              versatile, and essential tool for web development in the 21st
              century. With ongoing updates, an active community, and a plethora
              of libraries and frameworks, JavaScript is set to continue shaping
              the future of web development.
              <br />
              <br />
              Its impact extends far beyond the web browser, touching
              server-side development, mobile apps, and even desktop
              applications. JavaScript’s success is a testament to its
              adaptability and its ability to empower developers to build
              dynamic and interactive experiences for users worldwide.
            </p>
            <hr class="h-px mt-16 bg-gray-400 border-0 "></hr>
          </div>
          <div className="  left section w-1/3 ">
            <div className="course container p-4  bg-gray-100">
              <h1 className="text-center text-3xl font-bold my-6">
                Course Information
              </h1>
              <ul className="flex justify-between">
                <li className="text-gray-500">Start:</li>
                <li>November 22,2030</li>
              </ul>
              <hr class="h-px my-4 bg-gray-400 border-0 "></hr>
              <ul className="flex justify-between">
                <li className="text-gray-500">Duration</li>
                <li>November 28 Weeks</li>
              </ul>
              <hr class="h-px my-4 bg-gray-400 border-0 "></hr>
              <ul className="flex justify-between">
                <li className="text-gray-500">Study Level</li>
                <li>Intermediate</li>
              </ul>
              <hr class="h-px my-4 bg-gray-400 border-0 "></hr>
              <ul className="flex justify-between">
                <li className="text-gray-500">Discipline</li>
                <li>Other Course, Tech Courses</li>
              </ul>
              <hr class="h-px my-4 bg-gray-400 border-0 "></hr>
              <ul className="flex justify-between">
                <li className="text-gray-500">Price</li>
                <li>$45.00</li>
              </ul>
              <button className="text-white rounded-lg text-xl my-4 px-4 py-2 bg-yellow-500">
                PURCHASE COURSE
              </button>
            </div>
            <div className="p-4">
              <h1 className=" text-3xl font-bold my-6">Course Catogory</h1>
              <ul>
                <li className="text-lg font-medium hover:text-yellow-500 mb-2 ">
                  <i class="fa-solid fa-chevron-right  text-yellow-500"></i>{" "}
                  Site Template
                </li>
                <li className="text-lg font-medium hover:text-yellow-500 mb-2 ">
                  {" "}
                  <i class="fa-solid fa-chevron-right  text-yellow-500"></i>{" "}
                  Site Template
                </li>
                <li className="text-lg font-medium hover:text-yellow-500 mb-2 ">
                  {" "}
                  <i class="fa-solid fa-chevron-right  text-yellow-500"></i>{" "}
                  Site Template
                </li>
                <li className="text-lg font-medium hover:text-yellow-500 mb-2 ">
                  {" "}
                  <i class="fa-solid fa-chevron-right text-yellow-500"></i> Site
                  Template
                </li>
                <li className="text-lg font-medium hover:text-yellow-500 mb-2 ">
                  {" "}
                  <i class="fa-solid fa-chevron-right  text-yellow-500"></i>{" "}
                  Site Template
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default AllCourses;
