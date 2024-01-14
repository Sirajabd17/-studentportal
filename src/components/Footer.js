import { HEADER_LOGO } from "../utils/constant";

const FooterBar = () => {
  let footerObj = [
    {
      title: "Quick Links",
      likes: ["Home", "Courses", "Eventd", "Blog"],
    },
    {
      title: "Our Course",
      likes: ["Design", "Development", "Marketing", "SEO Design"],
    },
    {
      title: "Contact Us",
      likes: [
        "Phone: +884-9273-3867",
        "Email: hello@gmail.com",
        "Address: Random Road USA",
      ],
    },
  ];

  return (
    <>
      <div id="Contact" className="main footer max-w-6xl mx-auto  p-4 my-32 ">
        <div className=" flex gap-10">
          <div className="footer left w-1/4 ">
            <img src={HEADER_LOGO} alt="logo" />
            <h1 className="mt-8">
              eStore UI Kit comes with all essential features, sections and
              elements you need to design and develop web UI efficiently.
            </h1>
          </div>
          <div className="footer  flex w-3/4 ">
            {footerObj.map((section, index) => (
              <FooterPoint
                key={index}
                main={section.title}
                link={section.likes}

                // data={section.likes}
                //   {.likes.map((item, i) => (
                //     key={i}> data={item}
                //   ))}
              />
            ))}

            {/* <div className="footer right w-3/4 ">
            {footerObj.map((item,index) => (
              <FooterPoint key={index} title={item}
                {...item.likes.map((data)=>(
                    content={data}
                ))}
              />
            ))}
          </div> */}
          </div>
        </div>

        <hr class="h-px my-8 bg-gray-400 border-0 "></hr>

        <div className="flex justify-between">
          <div>
            {" "}
            <h1>Designed and Developed by UIdeck</h1>
          </div>
          <div className="">
            <i className="fa-brands fa-facebook-f text-xl   mx-4 hover:text-yellow-500"></i>
            <i className="fa-brands fa-instagram text-xl  hover:text-yellow-500"></i>
            <i className="fa-brands fa-twitter text-xl  mx-4 hover:text-yellow-500"></i>
            <i className="fa-brands fa-linkedin text-xl  hover:text-yellow-500"></i>
          </div>
        </div>
      </div>
    </>
  );
};

const FooterPoint = ({ main, link }) => {
  return (
    <>
      <div className=" w-1/3 ">
        <ul>
          <li className=" text-3xl  mb-8">{main}</li>
        </ul>
        <ul className="">
          {link.map((item) => (
            <li className="my-2 text-gray-500 text-lg hover:text-yellow-500">
              {" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default FooterBar;
