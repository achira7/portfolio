import { SearchIcon } from "../assets/icons/icons";
import Footer from "../components/Footer";

const Designs = () => {
  const GraphicLinks = [
    { id: 1, url: "https://www.behance.net/embed/project/186159973?ilo0=1" },
    { id: 2, url: "https://www.behance.net/embed/project/172877019?ilo0=1" },
    { id: 3, url: "https://www.behance.net/embed/project/172879399?ilo0=1" },
    { id: 4, url: "https://www.behance.net/embed/project/172870503?ilo0=1" },
    { id: 5, url: "https://www.behance.net/embed/project/152312943?ilo0=1" },
    { id: 6, url: "https://www.behance.net/embed/project/152310573?ilo0=1" },
  ];

  return (
    <div className="w-full">
    <div className="flex flex-wrap justify-center items-center mt-32 mx-28">


      <div className="flex px-5 items-center justify-center mb-10">
        <SearchIcon className="text-color-primary md:w-10 md:h-10 " />
        <input
          id="clickable"
          className="clickable bg-card-primary-top px-8 text-xl outline-none ml-3 block font-inter rounded-full py-3 text-color-secondary md:text-3xl"
          type="search"
          placeholder="Search"
          // value={searchQuery}
          // onChange={handleSearchChange}
        />
      </div>


      <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
        {GraphicLinks.map((link) => (
          <div key={link.id} className="m-5">
            <iframe
              src={link.url}
              height="316"
              width="404"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              referrerPolicy="strict-origin-when-cross-origin"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        ))}
      </div>
      
    </div><Footer />
    </div>
  );
};

export default Designs;
