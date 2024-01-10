import "./App.css";
import Course from "./components/Course";
import Header from "./components/Header";
import NavigationBar from "./components/Navbar";
import Allcourse from "./components/Viewallcourse";
import Skills from "./components/skills";
import TopCatogary from "./components/Topcatogary";
import BenifitVideo from "./components/Benifitscourse";
import InstructorDetails from "./components/Instractor";
import Form from "./components/Formsection";
import BlogDetail from "./components/Blog";
import FooterBar from "./components/Footer";
import HeaderBelow from "./components/HeaderBottom";

function App() {
  return (
    <>
      <Header />
      <HeaderBelow />
      <Skills />
      <Course />
      <Allcourse />
      <TopCatogary />
      <BenifitVideo />
      <InstructorDetails />
      <BlogDetail />
      <Form />
      <FooterBar />
    </>
  );
}

export default App;
