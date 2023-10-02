import useMediaQuery from '@/hooks/useMediaQuery';
// import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.mp4";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SponsorRedBulll from "@/assets/SponsorRedBulll.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";


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

                <p className='mt-8 text-md'>
                At Herlindo Painting & Roofing, we pride ourselves in providing exceptional services to Houston and its surrounding areas. We specialize in providing complete remodeling services; interior & exterior, as well as roofing.
                </p>
                <p className='mt-8 text-md'>
                  Start Now: <a href="tel:+12816605963" style={{textDecoration: 'underline', color: 'blue'}}>281-660-5963 (Text + Call)</a>
                </p>

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
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Click Here For More Info</p>
              </AnchorLink>
            </motion.div>
        </div>

        {/* image */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <video autoPlay loop muted >
            <source src={HomePageGraphic} type="video/mp4" />
          </video>
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
