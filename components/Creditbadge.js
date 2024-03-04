import { useState, useEffect } from "react";
import Link from "next/link";
import { FiCreditCard, FiSearch } from "react-icons/fi";

import { BsStars } from "react-icons/bs";

// CODE FOR OLD CREDIT BADGE

// const CreditBadge = ({ credits }) => {
//   const [showCredits, setShowCredits] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowCredits((prevState) => !prevState);
//     }, 5000); // Change to the desired duration in milliseconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Link href="/upgrade">
//       <a
//         className="flex items-center text-white font-medium rounded-full text-sm px-5 py-2.5 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
//         style={{ backgroundColor: "#C7DAFD", color: "blue", cursor: "pointer" }}
//       >
//         <FiCreditCard className="mr-2" />
//         {showCredits ? (
//           <>Credits Left: {credits}</>
//         ) : (
//           <>
//             <span>Upgrade now for Unlimited</span>
//           </>
//         )}
//       </a>
//     </Link>
//   );
// };

// export default CreditBadge;

const CreditBadge = ({ credits = 6 }) => {
  return (
    <button className="bg-navblue flex justify-center items-center text-white px-15 py-6.4 rounded w-[161px] h-[38.8px] border border-navblue gap-2 hover:bg-[#1890ff] hover:border-none">
      <BsStars /> {credits} credits left
    </button>
  );
};
export default CreditBadge;
