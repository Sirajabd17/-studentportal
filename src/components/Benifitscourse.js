import { useState } from "react";
import { VIDEO_MEETING_IMGAE_URL } from "../utils/constant";
const BenifitVideo = () => {
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
        <div className="content flex gap-10">
          <img
            className="w-3/5 ml-0"
            src={VIDEO_MEETING_IMGAE_URL}
            alt="all course img"
          />
          <div>
            <h1 className="text-gray-500 font-bold text-5xl mb-6 -mt-10">
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
    <div className=" video meeting flex gap-14 mt-8">
      <i className={`fa-solid ${icon} text-5xl mt-4 ml-4`}></i>

      <div>
        <h1 className="text-gray-500 text-2xl font-bold mb-4">{title}</h1>
        <h1>{desc}</h1>
      </div>
    </div>
  );
};
export default BenifitVideo;
