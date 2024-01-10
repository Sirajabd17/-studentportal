import SkillCard from "./Skillscard";
const Skills = () => {
  const card1Detail = [
    {
      id: 1,
      title: "Learn Anything",
      description:
        "Instead of doing the same thing every single day, it is beneficial to try new things. When people experience new things",
      icon: "fa-clipboard",
    },
    {
      id: 2,
      title: "Large Collection",
      description:
        "Learning can be adaptive and flexible to meet life’s demand. Although it is important to learn new things ",
      icon: "fa-magnifying-glass",
    },
    {
      id: 3,
      title: "Certified Instructor",
      description:
        "When scrolling through social media it is important that one only feed into some of the things that are put out into the world ",
      icon: "fa-certificate",
    },
  ];

  return (
    <>
      <div className="container mx-auto  mt-20 p-4  ">
        <div>
          <h1 className="text-center text-4xl text-gray-600 font-bold">
            Learn Newskills
          </h1>
          <p className="text-center mt-4 mb-32">
            Learning is a relatively permanent change in behavior or knowledge
            that results from experience
          </p>
        </div>

        <div className=" flex flex-wrap mx-28 gap-8">
          {card1Detail.map((detail) => (
            <SkillCard key={detail.id} info={detail} />
          ))}
          {/* Other components and content */}
        </div>
      </div>
    </>
  );
};
export default Skills;

/* <div className=" text-center ">
        <h1 className="text-5xl font-medium text-gray-600 ">
          {" "}
          Learn New Skills
        </h1>
        <h1 className="mt-5 text-balance w-1/3 mx-auto ">
          {" "}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt utlabo
        </h1>
      </div>
      <div className="flex justify-evenly  mt-10 ">
        <div className=" w-96 h-48 ">
          <div className="text-center mt-5">
            <i className={"fa-solid ${fa-clipboard} fa-flip fa-2xl"}></i>
          </div>
          <div className="">
            <h1 className="  text-gray-500 text-center mt-5 text-2xl font-bold ">
              {" "}
              Learn Anything
            </h1>
            <p className="mt-5 px-8   text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetu sadi ps cinelitr, sed diam
              nonumy eirtem Lorem ipsum dolor sit amet, consetetur.
            </p>
          </div>
        </div>

        <div className=" w-96 h-48">
          <div className=" text-center mt-5">
            <i class="fa-solid fa-magnifying-glass fa-flip fa-2xl"></i>
          </div>
          <div className="">
            <h1 className=" text-gray-500 text-center mt-5 text-2xl font-bold">
              {" "}
              Large Collections
            </h1>
            <p className="mt-5 px-8 text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetu sadi ps cinelitr, sed diam
              nonumy eirtem Lorem ipsum dolor sit amet, consetetur.
            </p>
          </div>
        </div>

        <div className="  w-96 h-48">
          <div className="text-center mt-5">
            <i class="fa-solid fa-certificate fa-flip fa-2xl"></i>
          </div>
          <div className="content">
            <h1 className="  text-gray-500 text-center mt-5 text-2xl font-bold">
              {" "}
              Certified Instractor
            </h1>
            <p className="mt-5 px-8  text-center">
              {" "}
              Lorem ipsum dolor sit amet, consetetu sadi ps cinelitr, sed diam
              nonumy eirtem Lorem ipsum dolor sit amet, consetetur.
            </p>
          </div>
        </div>
      </div> */
