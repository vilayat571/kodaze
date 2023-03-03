import { ReactNode, useEffect } from "react";
import NavbarHeader from "../components/Navbar/NavbarHeader";
import Fotter from "../parts/Fotter/Fotter";
import Navbar from "../parts/Navbar/Navbar";

interface ILayout {
  children: ReactNode;
}

export default function Layout(props: ILayout) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <NavbarHeader />
      <Navbar />
      {props.children}
      <Fotter />
    </div>
  );
}
