import { useState } from "react";
import { VIDEO_MEETING_IMGAE_URL } from "../utils/constant";
const BenifitsCourse = () => {
  let obj = [
    {
      title: "200+ Online Course",
      desc: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime. Maimonides Education has an important impact in shaping the future.",
      icon: "fa-table-cells-large",
    },
    {
      title: "Expert Instructor",
      desc: "To increase the number of students continuing higher education, the future research work.",
      icon: "fa-user",
    },
    {
      title: "Lifetime Access & Support",
      desc: "To increase the number of students continuing higher education, the future research work.",
      icon: "fa-phone-volume",
    },
  ];
  const [pointsList] = useState(obj);
  return (
    <>
      <div className="container max-w-6xl    my-32">
        <div className="content sm:flex gap-10">
          <img
            className=" w-full sm:w-3/5 sm:ml-0"
            src={VIDEO_MEETING_IMGAE_URL}
            alt="all course img"
          />
          <div className="w-full sm:w-2/5 mt-14">
            <h1 className="text-gray-500 font-bold text-5xl mb-6 sm:-mt-10">
              What Makes us Different?
            </h1>
            <p>
              {" "}
              Give a man a fish and you feed him for a day; teach a man to fish
              and you feed him for a lifetime. Maimonides Education has an
              important impact in shaping the future.
            </p>

            {pointsList.map((points) => (
              <KeyPoints {...points} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
const KeyPoints = ({ title, desc, icon }) => {
  return (
    <div className=" video meeting sm:flex gap-14 mt-8">
      <i className={`fa-solid ${icon} text-5xl mt-4 ml-4`}></i>

      <div>
        <h1 className="text-gray-500 text-2xl font-bold mb-4">{title}</h1>
        <h1>{desc}</h1>
      </div>
    </div>
  );
};
export default BenifitsCourse;
