import { useState } from "react";
import noakhali from "../assets/noakhali.png";
import feni from "../assets/feni.png";
import quota from "../assets/quota-protest.png";
import coin from "../assets/coin.png";

const cardData = [
  {
    img: noakhali,
    title: "Donate for Flood at Noakhali, Bangladesh",
    desc: "The recent floods in Noakhali have caused significant damage to homes infrastructure. Your donation will help provide essential supplies and to those affected by this disaster. Every contribution, big or small, makes difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need.",
  },
  {
    img: feni,
    title: "Donate for Flood Relief in Feni, Bangladesh",
    desc: "The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need.",
  },
  {
    img: quota,
    title: "Aid for Injured in the Quota Movement",
    desc: "The recent Quota movement has resulted in numerous injuries and significant hardship for many individuals. Your support is crucial in providing medical assistance, rehabilitation, and necessary supplies to those affected. By contributing, you help ensure that injured individuals receive the care and support they need during this challenging time. Every donation plays a vital role in alleviating their suffering and aiding in their recovery. Please consider making a donation to support these brave individuals in their time in need.",
  },
];

export default function Donation({
  donations,
  onDonate,
  balance,
}: {
  donations: number[];
  onDonate: (idx: number, amount: number) => void;
  balance: number;
}) {
  const [inputs, setInputs] = useState(["", "", ""]);

  const handleInput = (idx: number, value: string) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  const handleDonateClick = (idx: number) => {
    const amount = Number(inputs[idx]);
    onDonate(idx, amount);
    setInputs((prev) => {
      const updated = [...prev];
      updated[idx] = "";
      return updated;
    });
  };

  return (
    <div className="grid gap-8 mx-auto md:w-[1140px]">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden md:h-[453px]"
        >
          <div className="md:w-1/2">
            <img
              src={card.img}
              width={400}
              height={300}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 w-fit mb-4">
                <img
                  src={coin}
                  width={20}
                  height={20}
                  alt="Coin icon"
                  className="object-contain"
                />
                <span>{donations[idx]} BDT</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {card.desc}
              </p>
            </div>
            <div className="mt-auto">
              <input
                type="text"
                value={inputs[idx]}
                onChange={(e) => handleInput(idx, e.target.value)}
                placeholder="Write Donation Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 mb-4"
              />
              <button
                className="w-full bg-lime-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-lime-600 transition-colors"
                onClick={() => handleDonateClick(idx)}
              >
                Donate Now
              </button>
              <div className="text-right text-xs text-gray-500 mt-2">
                Account Balance: {balance} BDT
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
