import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Donation from "./donation";
import History from "./history";

export default function Layout() {
  // Initial account balance
  const [balance, setBalance] = useState(5500);
  // Donation amounts for each card
  const [donations, setDonations] = useState([
    0, // Noakhali
    600, // Feni
    2400, // Quota Movement
  ]);
  // History notifications
  const [history, setHistory] = useState<
    Array<{
      date: string;
      amount: number;
      name: string;
    }>
  >([]);
  // Tab state
  const [activeTab, setActiveTab] = useState("donation");
  // Navbar ref for dynamic padding
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

  // Donation handler
  function handleDonate(cardIdx: number, amount: number) {
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    if (amount > balance) {
      alert("Donation amount exceeds account balance.");
      return;
    }
    // Update donations
    setDonations((prev) => {
      const updated = [...prev];
      updated[cardIdx] += amount;
      return updated;
    });
    // Update balance
    setBalance((prev) => prev - amount);
    // Add to history
    const cardNames = [
      "Flood at Noakhali, Bangladesh",
      "Flood Relief in Feni, Bangladesh",
      "Aid for Injured in the Quota Movement",
    ];
    setHistory((prev) => [
      {
        date: new Date().toLocaleString(),
        amount,
        name: cardNames[cardIdx],
      },
      ...prev,
    ]);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar ref={navbarRef} balance={balance} />
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
        {activeTab === "donation" ? (
          <Donation
            donations={donations}
            onDonate={handleDonate}
            balance={balance}
          />
        ) : (
          <History history={history} />
        )}
      </div>
      <Footer />
    </div>
  );
}
