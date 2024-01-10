const Form = () => {
  return (
    <>
      <div className="container max-w-5xl mx-auto  p-4  mt-32 mb-32">
        <div className="content flex gap-6">
          <div>
            <h1 className="text-gray-500 font-bold text-5xl mb-6">
              Get In Touch
            </h1>
            <p>
              {" "}
              Give a man a fish and you feed him for a day; teach a man to fish
              and you feed him for a lifetime.{" "}
            </p>
            <h1 className="text-2xl font-medium mt-8 mb-2">
              Hot Line Call Us 24/7
            </h1>
            <h1 className="text-2xl font-medium mb-2">000-2222-5555</h1>
            <h1 className="text-2xl font-medium">heloo@gmail.com</h1>
          </div>
          <div className="w-3/4">
            <form>
              <input
                className="border-2 p-2  w-2/5 mr-10 mb-5  "
                type="text"
                placeholder="Name"
              ></input>
              <input
                className=" border-2  w-2/5 ml-16 p-2 "
                type="text"
                placeholder="Email"
              ></input>

              <input
                className=" border-2 p-2 w-full mb-5"
                type="text"
                placeholder="Subject"
              ></input>
              <textarea
                className=" border-2 p-2 w-full  mb-5"
                type="text"
                placeholder="message"
              ></textarea>
              <button className="text-center text-white  ml-[450px] text-xl   rounded-lg border-2 bg-yellow-500 py-2 px-4 ">
                {" "}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
