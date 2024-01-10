import { ALL_COURSE_IMAGE_URL } from "../utils/constant";

const Allcourse = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto  p-4 ">
        <div className="content flex gap-10">
          <div>
            <h1 className="text-gray-500 font-bold text-5xl mb-6">
              Welcome To Online Learning
            </h1>
            <p>
              {" "}
              Give a man a fish and you feed him for a day; teach a man to fish
              and you feed him for a lifetime. Maimonides Education has an
              important impact in shaping the future of a being by teaching
              skills that can prepare them physically, mentally and socially for
              the world of work. There have been many innovations in improving
              and expanding the reach of Education. But, the one that interests
              me most is Distance Learnin
            </p>
            <button className="text-center text-xl   font-bold my-16  border-b-2 border-yellow-500 text-yellow-500 ">
              {" "}
              Read More{" "}
            </button>
          </div>
          <img
            className="w-1/2"
            src={ALL_COURSE_IMAGE_URL}
            alt="all course img"
          />
        </div>
      </div>
    </>
  );
};

export default Allcourse;
