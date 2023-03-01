import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import ContactPageIcon from '@mui/icons-material/ContactPage';
function Navbar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex justify-between items-center h-24 mx-auto px-10 text-gray-300 text-xl font-bold shadow-[0_5px_5px_0px_rgb(0,0,0)]">

      

      <ul className="hidden md:flex gap-10">
        <li className="flex flex-row gap-2 items-center">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="header__nav__item__link__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>
          <Link className="focus:text-indigo-500  hover:text-indigo-500" to="/">
            Home
          </Link>
        </li>

        <li className="flex flex-row gap-2 items-center">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="header__nav__item__link__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 22h1v-2h-.989C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3 0 4.736 3.269 5.996 5 6zm13-11c-.082 0-2-.034-2-3 0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4 0 1.993.665 3.246 1.502 4-.837.754-1.502 2.007-1.502 4 0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3L22 11z"></path></svg>
          <Link className="focus:text-indigo-500  hover:text-indigo-500" to="/skills">
            Skills
          </Link>
        </li>

        <li className="flex flex-row gap-2 items-center">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="header__nav__item__link__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path></svg>
          <Link className="focus:text-indigo-500  hover:text-indigo-500" to="/projects">
            Projects
          </Link>
        </li>

        <li className="flex flex-row gap-2 items-center">
          <ContactPageIcon/>
          <Link className="focus:text-indigo-500 hover:text-indigo-500" to="/contact">
            Contact me
          </Link>
        </li>
      </ul>
      <ul className="hidden md:flex w-1/12 justify-center gap-4 ">
        <li>
          <a
            href="https://github.com/JDomene99"
            target="_blank"
            className="hover:text-gray-600"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jose-domene-4591ba201/"
            target="_blank"
            className="hover:text-gray-600"
          >
            <LinkedInIcon />
          </a>
        </li>
      </ul>

      <h1 className="block md:hidden"></h1>
      <div onClick={handleNav} className="block md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <ul
      id="navbarMobile"
        className={
          nav
            ? " fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-40 opacity-90"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="py-2 border-b-2 pl-3 flex flex-row gap-2 items-center pt-5">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="header__nav__item__link__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>
          <Link className="" to="/"
          onClick={handleNav}>

            Home
          </Link>
        </li>

        <li className="py-2 border-y-2 border-t-black pl-3 flex flex-row gap-2 items-center">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="header__nav__item__link__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 22h1v-2h-.989C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3 0 4.736 3.269 5.996 5 6zm13-11c-.082 0-2-.034-2-3 0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4 0 1.993.665 3.246 1.502 4-.837.754-1.502 2.007-1.502 4 0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3L22 11z"></path></svg>
          <Link className="" to="/skills" onClick={handleNav}>
            Skills
          </Link>
        </li>

        <li className="py-2 border-y-2 border-t-black pl-3 flex flex-row gap-2 items-center" >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="header__nav__item__link__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path></svg>
          <Link className="" to="/projects" onClick={handleNav}>
            Projects
          </Link>
        </li>

        <li className="py-2 border-y-2 border-t-black pl-3 flex flex-row gap-2 items-center">
        <ContactPageIcon/>
          <Link className="" to="/contact" onClick={handleNav}>
            Contact me
          </Link>
        </li>
        <div className=" flex flex-row gap-10 py-2 border-y-2 border-t-black pl-3">
        <li >
          <a
            href="https://github.com/JDomene99"
            target="_blank"
            className="hover:text-gray-600"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jose-domene-4591ba201/"
            target="_blank"
            className="hover:text-gray-600"
          >
            <LinkedInIcon />
          </a>
        </li>
        </div>
        
      </ul>
    </nav>
  );
}

export default Navbar;
