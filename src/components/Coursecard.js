import { COURSE_IMAGE_BASE_URL } from "../utils/constant";

const CourseCard = ({ detail }) => {
  return (
    <>
      <div className="w-full sm:w-80   rounded-md ">
        <img
          className="h-64 w-96 hover:scale-110 duration-200 "
          src={`${COURSE_IMAGE_BASE_URL}${detail.img}`}
          alt="course pic"
        />
        <h1 className="text-center text-2xl  mt-3 text-gray-500">
          {detail.course}
        </h1>
        <div className="mt-4">
          <div className="flex justify-evenly  items-center text-xs mb-8">
            <i className="fa-regular fa-user">
              <span className="px-4">{detail.user}</span>
            </i>
            <i className="fa-regular fa-eye ">
              <span className="px-4">{detail.view}</span>
            </i>
            <i className="fa-regular fa-star ">
              <span className="px-2">{detail.rating}</span>
            </i>
            <span className="text-yellow-500 text-base">{detail.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
