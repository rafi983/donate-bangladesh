import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Donation from "./donation";
import History from "./history";

export default function Layout() {
  const [activeTab, setActiveTab] = useState("donation");
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight((navbarRef.current as HTMLDivElement).offsetHeight);
    }
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight((navbarRef.current as HTMLDivElement).offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar ref={navbarRef} />
      <div
        style={{ paddingTop: navbarHeight + 24 }}
        className="p-4 md:p-8 flex-grow"
      >
        {/* Tab Navigation */}
        <div className="mb-8 w-full flex justify-center gap-12">
          <button
            className={`font-semibold px-8 py-3 rounded-xl shadow-md min-w-fit flex-shrink-0 ${
              activeTab === "donation"
                ? "bg-lime-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setActiveTab("donation")}
          >
            Donation
          </button>
          <button
            className={`font-semibold px-8 py-3 rounded-xl shadow-md min-w-fit flex-shrink-0 ${
              activeTab === "history"
                ? "bg-lime-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setActiveTab("history")}
          >
            History
          </button>
        </div>

        {/* Conditionally render content based on activeTab */}
        {activeTab === "donation" ? <Donation /> : <History />}
      </div>
      <Footer />
    </div>
  );
}
