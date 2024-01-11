import { VIDEO_MEETING_IMGAE_URL } from "../utils/constant";

const MainCoursePage = () => {
  return (
    <>
      <div>
        <img className=" w-full" src={VIDEO_MEETING_IMGAE_URL} alt="" />
      </div>
      <h1 className="text-2xl mt-50 text-cyan-700">main course page</h1>
    </>
  );
};
export default MainCoursePage;
