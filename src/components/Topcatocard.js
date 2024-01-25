const TopCard = ({ catogary }) => {
  return (
    <>
      <div className="w-full sm:w-1/4 text-center p-6 mb-2 ">
        <i
          className={`fa-solid  ${catogary.icon} text-5xl mb-6 hover:scale-110 duration-200 `}
        ></i>
        <h1 className="font-bold text-3xl text-gray-500 ">{catogary.name}</h1>
      </div>
    </>
  );
};

export default TopCard;
