import HText from "@/shared/HText";
import { AbouttType, SelectedPage } from "@/shared/types";
import {
    WrenchScrewdriverIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Aboutt from "./Aboutt";
import image7 from "@/assets/image7.jpeg";

const about: Array<AbouttType> = [
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    title: "Guidance and Sourcing",
    description: "Our experts specialize in material guidance and sourcing, customizing our services to meet your exact needs.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diverse Professionals On Demand",
    description: "Our diverse professionals offer comprehensive solutions for roofing, remodeling, and more, ensuring all your needs are met efficiently.",
  },
  {
    icon: <UserIcon className="h-6 w-6" />,
    title: "World Class Leadman",
    description: "Led by Herlindo, with 30+ years in the industry, we guarantee meticulous attention to every project phase, from initial quote to final touches.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section
    id="about"
    className="mx-auto min-h-full w-5/6 "
  >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.About)}
    >
      {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <HText>MORE THAN JUST A SERVICE.</HText>
            <p className="my-5 text-md">
            By providing you with world class guidance, professionals, and leadman we get you to your ultimate goal with ease. We provide true care into each and every customer.
            </p>
        </motion.div>

        {/* About */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5}}
          variants={container}
          >
          {about.map((aboutt: AbouttType) => (
            <Aboutt
              key={aboutt.title}
              icon={aboutt.icon}
              title={aboutt.title}
              description={aboutt.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-20 bg-center relative" style={{ backgroundImage: `url(${image7})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '75vh' }}>
        <div className="bg-black bg-opacity-75 p-10 rounded-lg max-w-3xl mx-auto md:mx-0 md:bg-opacity-50">
            {/* Title */}
            <div className="text-center md:text-left">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
              <div className="text-white">
                <HText>
                  THOUSANDS OF HAPPY CUSTOMERS
                </HText>
              </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-white">For over 30 years, Herlindo Painting & Roofing has been dedicated to serving Houston and its surrounding areas. We take pride in our ability to consistently provide exceptional service and have earned a reputation for keeping our customers happy with every project we undertake.</p>
            </motion.div>
          </div>
        </div>
    </motion.div>
  </section>
  );
};

export default About;
