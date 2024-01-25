import { useState } from "react";

const AccordianCourse = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" ml-3 mb-5">
        <div className="flex justify-between px-4">
          <h1 className="text-xl text-gray-500">{Question}</h1>
          <p onClick={() => setShow(!show)}>
            {" "}
            {show ? (
              <i className="fa-solid fa-chevron-down"></i>
            ) : (
              <i className="fa-solid fa-chevron-up"></i>
            )}{" "}
          </p>
        </div>
        {show && <h1 className="text-lg px-4">{Answer}</h1>}
      </div>
    </>
  );
};
export default AccordianCourse;
