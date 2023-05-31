import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          We value each and every customer and hope to create long term clients!
          </p>
          <p>© Herlindo Painting & Roofing All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Extra Information</h4>
          <p className="my-5">Deposit will be required for materials</p>
          <p className="my-5">English and Spanish Speakers on demand</p>
          {/* <p>Ullamcorper vivamus</p> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">herlindo713@yahoo.com</p>
          <p>(281)660-5963</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
