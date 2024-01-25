import BenifitsCourse from "./Benifitscourse";
import Blog from "./Blog";

import Course from "./Course";
import Form from "./Formsection";

import HeaderBelow from "./HeaderBelow";
import Instructor from "./Instructor";
import TopCatogary from "./Topcatogary";
import Allcourse from "./Viewallcourse";
import Skills from "./skills";

const HomeAllPage = () => {
  return (
    <>
      <HeaderBelow />
      <Skills />
      <Course />
      <Allcourse />
      <TopCatogary />

      <BenifitsCourse />
      <Instructor />
      <Blog />
      <Form />
    </>
  );
};

export default HomeAllPage;
