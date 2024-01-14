import { useState } from "react";
import { Content } from "../utils/constant";
import Accordian from "./AccordianCourse";
const TopicCourse = () => {
  const [data] = useState(Content);

  return (
    <>
      <div className="max-w-6xl mx-auto   my-20">
        <div className="w-2/3 ">
          <h1 className=" text-3xl font-bold my-4">TOPICS INCLUDED</h1>
          <div className=" topic section flex  gap-52  ">
            <ul>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> React
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> ES7
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> Vue
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> React Router
              </li>
            </ul>
            <ul>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> Personal
                Assistance
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> Standard and
                secure Code
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-yellow-500 mb-1 ">
                <i class="fa-solid fa-check  text-yellow-500"></i> Validated
              </li>
            </ul>
          </div>
          <hr class="h-px my-16 bg-gray-400 border-0  "></hr>
          <div className="course content section ">
            <h1 className=" text-3xl font-bold my-4">COURSE CONTENT</h1>
            <div className=" ">
              {" "}
              {data.map((item) => {
                const { id } = item;
                return <Accordian key={id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopicCourse;
