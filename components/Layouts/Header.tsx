import Image from "next/image";
import logo from "../../public/images/image 85.svg";
import LogoText from "../../public/images/Apple-Store.svg";
const Header = () => {
    return (
        <div className="header flex gap-1 w-full py-3 bg-white px-10">
        <Image src={logo} alt="logo" />
        <Image src={LogoText} alt="Picture of the author" />
      </div>
    )
}
export default Header;