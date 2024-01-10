import Instructor from "./Instructorcard";
const InstructorDetails = () => {
  const teacherDetails = [
    {
      id: 1,
      name: "Akshey Saini",
      img: "https://yt3.googleusercontent.com/ytc/AIf8zZRr-XxwSuOW9kwN9wXTxhmT-I3A1dhcYKmiBz4h9g=s900-c-k-c0x00ffffff-no-rj",
      domain: "Expert Designer",
    },
    {
      id: 2,
      name: "Ritesh",
      img: "https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s900-c-k-c0x00ffffff-no-rj",
      domain: "Web Developer",
    },
    {
      id: 3,
      name: "Sanuja",
      img: "https://yt3.googleusercontent.com/f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s900-c-k-c0x00ffffff-no-rj",
      domain: "Business Market Expert",
    },
    {
      id: 4,
      name: "Harry",
      img: "https://i0.wp.com/wikipura.com/wp-content/uploads/2023/10/codewithharry_335780901_3455018714773197_8900865400887586729_n.jpg?resize=1024%2C1024&ssl=1",
      domain: "SEO Expert",
    },
  ];
  return (
    <>
      <div className="container max-w-5xl mx-auto  p-4 my-20 ">
        <div>
          <h1 className="text-center text-4xl text-gray-600 font-bold">
            Our Expert Instructors
          </h1>
          <p className="text-center mt-4 mb-32">
            eStore UI Kit comes with all essential features, sections and
            elements you need to design and develop web UI efficiently.
          </p>
        </div>
        <div className="flex  gap-4">
          {teacherDetails.map((data) => (
            <Instructor key={data.id} teacherData={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default InstructorDetails;
