import { useEffect, useState } from "react";
import { SearchIcon } from "../assets/icons/icons";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Designs = () => {
  const [activeTab, setActiveTab] = useState("Graphic");
  const [graphicLinks, setGraphicLinks] = useState([]);
  const [uiuxLinks, setUiuxLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const generateEmbedLink = (url) => {
    const match = url.match(/\/(\d+)\//);
    if (match && match[1]) {
      return `https://www.behance.net/embed/project/${match[1]}?ilo0=1`;
    }
    throw new Error("Invalid Behance URL");
  };

  useEffect(() => {
    // Fetch JSON file
    fetch("/designs.json") // Adjust path if the file isn't in the `public` folder
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load JSON file");
        return response.json();
      })
      .then((data) => {
        // Add embed property dynamically
        const updatedGraphicLinks = data.GraphicLinks.map((link) => ({
          ...link,
          embed: generateEmbedLink(link.url),
        }));
        const updatedUiuxLinks = data.UiuxLinks.map((link) => ({
          ...link,
          embed: generateEmbedLink(link.url),
        }));
        setGraphicLinks(updatedGraphicLinks);
        setUiuxLinks(updatedUiuxLinks);
      })
      .catch((error) => console.error("Error fetching designs:", error));
  }, []);

  const filteredLinks =
    activeTab === "Graphic"
      ? graphicLinks.filter(
          (link) =>
            link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            link.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : uiuxLinks.filter(
          (link) =>
            link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            link.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center items-center mt-24 md:mt-32 mx-5">
        <div className="flex flex-col items-center justify-center ">
          {/* Tab Navigation */}

          {/* Search Bar */}
          <div className="flex md:px-5 items-center justify-center mb-10 md:mr-10 flex-col md:flex-row">
            <div className="flex flex-row items-center justify-center">
              <SearchIcon className="text-color-primary md:w-10 md:h-10 mx-2" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="clickable bg-card-primary-top md:px-8 text-xl outline-none  md:ml-3 block font-inter border border-color-secondary rounded-full py-3 md:py-3 text-center md:text-left text-color-secondary md:text-3xl"
                type="search"
                placeholder={`Search ${activeTab} Designs`}
              />
            </div>

            <div className="flex justify-center gap-5 mx-5 mt-5 md:mt-0">
              <button
                id="clikcable"
                onClick={() => {
                  setActiveTab("Graphic");
                  setSearchQuery("");
                }}
                className={`px-5 md:px-6 py-1 md:py-2 text-base md:text-lg font-semibold rounded-xl md:rounded-full transition-colors duration-200 ${
                  activeTab === "Graphic"
                    ? "bg-color-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Graphic Design
              </button>
              <button
                id="clikcable"
                onClick={() => {
                  setActiveTab("UIUX");
                  setSearchQuery(""); // Clear search query when switching tabs
                }}
                className={`px-5 md:px-6 py-1 md:py-2 text-base md:text-lg font-semibold rounded-xl md:rounded-full transition-colors duration-200 ${
                  activeTab === "UIUX"
                    ? "bg-color-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                UI/UX Design
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-wrap justify-center items-center gap-5 px-2 md:mb-10 ">
          {filteredLinks.map((link) => (
            <div
              key={link.id}
              className="m-5 min-w-11/12 sm:w-4/5 md:w-72 lg:w-80 p-4 shadow-lg rounded-lg bg-card-primary-top"
              >
              <iframe
                src={link.embed}
                height="250"
                width="100%"
                loading="lazy"
                allowFullScreen
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
                className="rounded-t-lg"
              ></iframe>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-color-primary">
                  {link.title}
                </h3>
                <p className=" mb-4 text-color-secondary">{link.description}</p>
                <Button
                  link={link.url}
                  name={"View on Behance"}
                  color={"blue"}
                  icon={"behance"}
                  iconClass="hidden sm:inline"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Designs;
