import noakhali from "../assets/noakhali.png";
import feni from "../assets/feni.png";
import quota from "../assets/quota-protest.png";

import coin from "../assets/coin.png";

export default function Donation() {
  return (
    <div className="grid gap-8 mx-auto md:w-[1140px]">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden md:h-[453px]">
        <div className="md:w-1/2">
          <img
            src={noakhali}
            width={400}
            height={300}
            alt="People in a boat during a flood"
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
              <span>0 BDT</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Donate for Flood at Noakhali, Bangladesh
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The recent floods in Noakhali have caused significant damage to
              homes infrastructure. Your donation will help provide essential
              supplies and to those affected by this disaster. Every
              contribution, big or small, makes difference. Please join us in
              supporting the relief efforts and making a positive impact on the
              lives of those in need.
            </p>
          </div>
          <div className="mt-auto">
            <input
              type="text"
              placeholder="Write Donation Amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 mb-4"
            />
            <button className="w-full bg-lime-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-lime-600 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden md:h-[453px]">
        <div className="md:w-1/2">
          <img
            src={feni}
            width={400}
            height={300}
            alt="Flooded village from aerial view"
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
              <span>600 BDT</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Donate for Flood Relief in Feni, Bangladesh
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The recent floods in Feni have devastated local communities,
              leading to severe disruption and loss. Your generous donation will
              help provide immediate aid, including food, clean water, and
              medical supplies, to those affected by this calamity. Together, we
              can offer crucial support and help rebuild lives in the aftermath
              of this disaster. Every contribution counts towards making a real
              difference. Please consider donating today to assist those in
              urgent need.
            </p>
          </div>
          <div className="mt-auto">
            <input
              type="text"
              placeholder="Write Donation Amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 mb-4"
            />
            <button className="w-full bg-lime-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-lime-600 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden md:h-[453px]">
        <div className="md:w-1/2">
          <img
            src={quota}
            width={400}
            height={300}
            alt="People helping an injured person"
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
              <span>2400 BDT</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Aid for Injured in the Quota Movement
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The recent Quota movement has resulted in numerous injuries and
              significant hardship for many individuals. Your support is crucial
              in providing medical assistance, rehabilitation, and necessary
              supplies to those affected. By contributing, you help ensure that
              injured individuals receive the care and support they need during
              this challenging time. Every donation plays a vital role in
              alleviating their suffering and aiding in their recovery. Please
              consider making a donation to support these brave individuals in
              their time in need.
            </p>
          </div>
          <div className="mt-auto">
            <input
              type="text"
              placeholder="Write Donation Amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 mb-4"
            />
            <button className="w-full bg-lime-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-lime-600 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
