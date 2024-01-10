import TopCard from "./Topcatocard";

const TopCatogary = () => {
  const TopCatogaryItem = [
    { id: 1, name: "Design", icon: "fa-palette" },
    { id: 2, name: "Development", icon: "fa-computer" },
    { id: 3, name: "Market", icon: " fa-people-group" },
    { id: 4, name: "Seo", icon: "fa-keyboard" },
    { id: 5, name: "Photopraphy", icon: "fa-camera" },
    { id: 6, name: "Business", icon: "fa-chart-column" },
    { id: 7, name: "Analysis", icon: "fa-magnifying-glass-chart" },
    { id: 8, name: " IT & Software", icon: "fa-robot" },
  ];
  return (
    <>
      <div className="container max-w-5xl mx-auto  p-4 my-20 ">
        <div>
          <h1 className="text-center text-4xl text-gray-600 font-bold">
            Top Catagories
          </h1>
          <p className="text-center mt-4 mb-32">
            eStore UI Kit comes with all essential features, sections and
            elements you need to design and develop web UI efficiently.
          </p>
        </div>
        <div className="flex flex-wrap  ">
          {TopCatogaryItem.map((item) => (
            <TopCard key={item.id} catogary={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-center text-xl  my-16 rounded-full border-2 border-yellow-500 py-4 px-8 hover:text-yellow-500">
            {" "}
            View All Course{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default TopCatogary;
