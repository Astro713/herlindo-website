import useMediaQuery from '@/hooks/useMediaQuery';
// import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SponsorRedBulll from "@/assets/SponsorRedBulll.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";
import HomePageGraphic from "@/assets/HomePageGraphic.mp4";
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
  <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
  >
    {/* Img & main header */}
    <motion.div
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* Headings */}
            <motion.div
              className='md:-mt-20'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
                <div className='relative'>
                    <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                </div>
            <div className="mt-8 space-y-4">
            <p className="text-md">
              At <span className="font-bold">Herlindo Painting & Roofing</span>, we specialize in interior and exterior remodeling services, alongside expert roofing solutions. Serving Houston and the surrounding areas, our services cater to both residential and commercial projects, ensuring top-quality results regardless of the scale or scope.
            </p>
              <p className="text-md">
                Ready to start your project? <span className="">Call or Text us at:</span> <a href="tel:+12816605963" className="underline text-blue-800">281-660-5963</a>
              </p>
            </div>

            </motion.div >

            {/* Actions */}
            <motion.div
              className='mt-8 flex items-center gap-8'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
              {/* <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton> */}
              <AnchorLink
                className="font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Quote Information</p>
              </AnchorLink>
            </motion.div>
        </div>

        {/* image */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <video autoPlay loop muted className="mb-6 md:mb-0" >
            <source src={HomePageGraphic} type="video/mp4" />
          </video>
          {/* <img
            className="my-5 mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          /> */}
        </div>
    </motion.div>

    {/* SPonzersss */}
    {isAboveMediumScreens && (
      <div className='h-[140px] w-full bg-primary-100 py-6'>
         <div className='mx-auto w-5/6'>
          <div className='flex w-4/5 items-center justify-between gap-8'>
            <img alt="Fortune-sponsor" src={SponsorFortune} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="redbull-sponsor" src={SponsorRedBulll} />

          </div>
         </div>
      </div>
    )}
  </section>
  );
};

export default Home;
