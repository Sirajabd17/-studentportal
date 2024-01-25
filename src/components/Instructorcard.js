const InstructorCard = ({ teacherData }) => {
  return (
    <>
      <div className="w-full sm:w-1/4 text-center  border-2  mb-20 rounded-lg">
        <img src={teacherData.img} className=" w-full" alt="Instructor " />
        <h1 className=" text-2xl my-4 ">{teacherData.name}</h1>
        <h1 className=" text-gray-500 mb-4">{teacherData.domain}</h1>
      </div>
    </>
  );
};

export default InstructorCard;
