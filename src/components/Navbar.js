// NavigationBar.js

const NavigationBar = () => {
  // Define your navigation items as an array of objects
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Services", link: "/services" },
    { id: 4, text: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <ul className="flex space-x-4">
          {/* Use map to create navigation links */}
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="text-white hover:text-gray-300">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
