export enum SelectedPage {
    Home = "home",
    About = "about",
    ServicesOffered = "servicesoffered",
    ContactUs = "contactus",
  }

  export interface AbouttType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ServiceType {
    name: string;
    description?: string;
    image: string;
  }
