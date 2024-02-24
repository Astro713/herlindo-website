import HText from "@/shared/HText";
import { AbouttType, SelectedPage } from "@/shared/types";
import {
    WrenchScrewdriverIcon,
    UserGroupIcon,
    UserIcon,
 } from "@heroicons/react/24/solid";
 import { motion } from "framer-motion";
import Aboutt from "./Aboutt";
import HomePageGraphic from "@/assets/HomePageGraphic.mp4";

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
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <video autoPlay loop muted className="mb-6 md:mb-0" >
            <source src={HomePageGraphic} type="video/mp4" />
          </video>

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1]">
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
                  <HText>
                    THOUSANDS OF HAPPY{" "}
                    <span className="text-primary-500">CUSTOMERS</span>
                  </HText>
                </motion.div>
              </div>
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
              <p className="my-5">For over 30 years, Herlindo Painting & Roofing has been dedicated to serving Houston and its surrounding areas. We take pride in our ability to consistently provide exceptional service and have earned a reputation for keeping our customers happy with every project we undertake.</p>

            </motion.div

            >

            {/* Join button(optional) */}
          </div>
        </div>
    </motion.div>
  </section>
  );
};

export default About;
