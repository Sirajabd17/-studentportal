const SkillCard = ({ info }) => {
  return (
    <>
      <div className="mx-0 sm:w-80 p-5  text-center border-2">
        <i className={` fa-solid ${info.icon} fa-flip fa-2xl my-8 `}></i>

        <p className="text-gray-600  mb-8 text-2xl font-bold ">{info.title}</p>
        <p className="text-gray-600   mb-4  ">{info.description}</p>
      </div>
    </>
  );
};

export default SkillCard;
