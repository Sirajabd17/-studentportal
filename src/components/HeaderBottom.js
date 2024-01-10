import { HEADER_BELOW_IMG, VIDEO_MEETING_IMGAE_URL } from "../utils/constant";
const HeaderBelow = () => {
  return (
    <>
      {/* <div className=" bg-slate-400 z-10">
        <img
          src={VIDEO_MEETING_IMGAE_URL}
          className="w-3/5 blur-md bg-slate-400"
          alt="header below bg image"
        />
      </div> */}
      <div className="container w-full bg-slate-700   my-32">
        <div className="content flex  gap-20">
          <img
            className="w-1/2 ml-0"
            src={HEADER_BELOW_IMG}
            alt="all course img"
          />
          <div className="p-10">
            <h1 className="text-white font-bold text-5xl mb-8">
              Education and Online Course Site Template
            </h1>
            <p className="text-xl text-white">
              {" "}
              Give a man a fish and you feed him for a day; teach a man to fish
              and you feed him for a lifetime.Maimonides Education has an
              important impact in shaping the future.
            </p>
            <button className="mt-4 px-6 py-3 text-black bg-white rounded-3xl text-xl hover:bg-yellow-500 hover:text-white">
              Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBelow;
