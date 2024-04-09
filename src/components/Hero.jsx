// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Prerna</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Aspiring CS student crafting digital futures
//             <br className="sm:block hidden" />
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import prernaPhoto from "../images/prerna-photo.jpg"; // Import your photo here

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Prerna</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Aspiring CS student crafting digital futures
//             <br className="sm:block hidden" />
//           </p>
//         </div>

//         {/* Responsive Photo */}
//         <div className="hidden sm:flex justify-center items-center">
//           <img
//             src={prernaPhoto}
//             alt="Prerna"
//             className="max-w-xs sm:max-w-full"
//           />
//         </div>
//       </div>

//       {/* <ComputersCanvas /> */}

//       {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import prernaPhoto from "../images/prerna-photo.jpg"; // Import your photo here

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Display image above other content on smaller screens */}
      <div className="lg:hidden flex justify-center items-center mb-5">
        <div className="rounded-full overflow-hidden w-20 h-20 mt-10">
          <img
            src={prernaPhoto}
            alt="Prerna"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Prerna</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            BTech CS student with a passion for innovation and
            problem-solving, driven by a relentless pursuit of knowledge.
            Proficient in various programming languages and technologies, adept
            at translating ideas into robust software solutions. Dedicated to
            continuous learning and staying abreast of the latest advancements
            in the tech industry.
            <br className="sm:block hidden" />
          </p>
        </div>

        {/* Responsive Photo */}
        <div className="hidden lg:flex justify-end items-center flex-1">
          <div className="rounded-full overflow-hidden w-32 h-32 lg:w-80 lg:h-80">
            <img
              src={prernaPhoto}
              alt="Prerna"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
