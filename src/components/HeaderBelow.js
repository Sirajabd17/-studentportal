import { HEADER_BELOW_IMG } from "../utils/constant";
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
      <div className="container  max-w-fit bg-slate-700  my-24">
        <div className="content sm:flex  gap-20">
          <img
            className=" mt-2 sm:w-1/2 sm:m-auto ml-0"
            src={HEADER_BELOW_IMG}
            alt="all course img"
          />
          <div className="pl-10">
            <h1 className="text-white font-bold text-5xl mb-8">
              Education and Online Course Site Template
            </h1>
            <p className="text-xl text-white">
              {" "}
              Give a man a fish and you feed him for a day; teach a man to fish
              and you feed him for a lifetime.Maimonides Education has an
              important impact in shaping the future.
            </p>
            <button className="mt-4  mb-1 px-6 py-3 text-black bg-white rounded-3xl text-xl hover:bg-yellow-500 hover:text-white">
              Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBelow;
