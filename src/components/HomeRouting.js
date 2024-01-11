import BenifitVideo from "./Benifitscourse";
import BlogDetail from "./Blog";
import Course from "./Course";
import Form from "./Formsection";

import HeaderBelow from "./HeaderBottom";
import InstructorDetails from "./Instractor";
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

      <BenifitVideo />
      <InstructorDetails />
      <BlogDetail />
      <Form />
    </>
  );
};

export default HomeAllPage;
