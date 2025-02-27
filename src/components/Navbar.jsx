import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-17 w-16" />


    </div>
    <div className=" m-8 flex items-center justify-center gap-4 text-2xl" >
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
        



    </div>


   </nav>
  )
}

export default Navbar
