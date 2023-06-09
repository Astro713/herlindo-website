import { SelectedPage, ServiceType } from '@/shared/types'
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Service from "@/scenes/OurServices/Service";

const services: Array<ServiceType> = [
    {
        name: "Roofing",
        description: "Our roofing services provide comprehensive repairs and replacements for any type of roof. From minor repair to a full installation, our team will work efficiently to get your roof fully functional in no time.",
        image: image1,
    },
    {
        name: "Exterior Work",
        description: "Our exterior work encompasses a range of services, including carpentry, painting, siding repair, deck building, windows, doors, etc.",
        image: image2,
    },
    {
        name: "Interior Remodeling",
        description: "From kitchen remodels to bathroom renovations, our interior remodeling services can bring new life to any room in your home. Our team works with you to create a design that meets your unique needs and preferences.",
        image: image3,
    },
    {
        name: "Fencing & Cement Work",
        description: "Our fencing and cement work services provide durable and attractive solutions for your property. Whether you need a new fence installed or concrete work done, our team delivers quality results that last.",
        image: image4,
    },
    {
        name: "Electrical",
        description: "Our electrical services ensure that your home's electrical systems are functioning properly and safely. From wiring to system installations.",
        image: image5,
    },
    {
        name: "Light Work",
        description: "Our light work services handle a range of small tasks like hanging lights, installing ceiling fans, light plumbing, pressure washing, tv mount, and more! ",
        image: image6,
    },
]

type Props = {
    setSelectedPage: ( value: SelectedPage) => void;
};

const ServicesOffered = ({ setSelectedPage }: Props) => {
  return <section id="servicesoffered" className='w-full bg-primary-100 py-40'>
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ServicesOffered)}
    >
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
            <div className='md:w-3/5'>
                <HText>Services Offered</HText>
            </div>
            <p className='py-5'>
                We offer commercial and residential service, exterior and interior. We also work with insurance.
            </p>
            <p>
                List of Services: Painting - Granite - Ceramic Tile - Cabinets - SheetRock Repair - Exterior & Interior Carpentry - Complete Bath & Kitchen Remodeling - Roof - Siding - Addition Services - Light Plumber - Electricity - Wood Floor - Pressure Washing -Laminate - Landscaping , And Much More.
            </p>

        </motion.div>
        <div className='mt-10 h-[354px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {services.map((item: ServiceType, index) => (
                    <Service
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </ul>
        </div>
    </motion.div>
  </section>
};

export default ServicesOffered;
