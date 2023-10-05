import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMobileMenuOpen?: boolean; // Add a ? to make it an optional prop
  closeMobileMenu?: () => void; // Add a ? to make it an optional prop
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  isMobileMenuOpen,
  closeMobileMenu,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    if (isMobileMenuOpen && closeMobileMenu) {
      // Close the mobile menu when a link is clicked
      closeMobileMenu();
    }
    setSelectedPage(lowerCasePage);
  };

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
        `}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
