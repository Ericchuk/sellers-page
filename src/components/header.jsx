import hamburger from "../assets/img/Vector.png";
import close from "../assets/img/Vector (3).png";
import Navbar from "./navbar";
import { useEffect, useState,useCallback } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav =  useCallback((e) => {
    setIsOpen(!isOpen);
  }, [isOpen] )

  const openNav = useCallback(() => {
    setIsOpen(!isOpen);
  })

  useEffect(() => {
    if (window.innerWidth > 699) {
      closeNav()
    }
  }, [isOpen]);

  return (
    <header className="py-5 px-4 shadow-lg">
      <aside className="flex justify-between items-center ">
        <img
          src={isOpen ? close : hamburger}
          altarticle="hamburger"
          onClick={openNav}
          alt="menu"
          className="w-6 lg:hidden"
        />
        <h2 className="w-11/12 text-[25px] font-bold text-center font-headings">ARTSY.</h2>
      </aside>
      <nav>
        {isOpen ? <Navbar setIsOpen={setIsOpen} isOpen={isOpen} /> : ""}
      </nav>
    </header>
  );
}
