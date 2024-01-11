import { HEADER_LOGO, NAVITEMS } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" z-10 pt-4  fixed top-0 w-full bg-slate-50 ">
        <div className="flex justify-between px-20  pb-4 mr-15 ml-15 items-center">
          <div>
            {" "}
            <img src={HEADER_LOGO} alt="logo" />
          </div>
          <ul className="flex space-x-8 p-2">
            {NAVITEMS.map((item) => (
              <li key={item.id} className="p-2">
                {item.type === "scroll" ? (
                  <a
                    href={item.link}
                    className=" text-xl text-gray-400 hover:text-yellow-500 "
                  >
                    {item.content}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className=" text-xl text-gray-400 hover:text-yellow-500 "
                  >
                    {/* href={item.link} */}
                    {/* <a className=" text-xl text-gray-400 hover:text-yellow-500 "> */}
                    {item.content}
                    {/* </a> */}
                  </Link>
                )}
              </li>
            ))}
            <button className="rounded-full text-xl text-white p-2 px-4 bg-yellow-500">
              {" "}
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;

// <div className="flex  p-5 space-x-7 list-none">
// <li className="p-2 text-2xl  hover:text-yellow-500">
//   {" "}
//   <a href="#home">Home</a>
// </li>
// <li className="p-2 text-2xl hover:text-yellow-500">
//   {" "}
//   <a href="#Course">Course</a>
// </li>
// <li className="p-2 text-2xl  hover:text-yellow-500">
//   {" "}
//   <a href="#Mentor">Mentor</a>
// </li>
// <li className="p-2 text-2xl  hover:text-yellow-500">
//   {" "}
//   <a href="#Blog">Blog</a>
// </li>
// <li className="p-2 text-2xl  hover:text-yellow-500">
//   {" "}
//   <a href="#Contact">Contact</a>
// </li>{" "}
// <button className=" text-white bg-yellow-500 rounded-full px-4 text-2xl">
//   {" "}
//   Get Started
// </button>
// </div>
// </div>
// </div>
