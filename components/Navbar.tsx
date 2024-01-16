import Link from "next/link"
import Button from "./Button"
import Image from "next/image"
const Navbar = () => {
    return (
        <nav className="relative z-10 py-7  flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0">
            <Link href='/'>
                <Image src="hilink-logo.svg" height={80} width={80} alt="hilink-logo" />
            </Link>
            <ul className="hidden gap-14 md:flex">
                <li className="links"><Link href="">Home</Link></li>
                <li className="links"><Link href="">How Hilink Work?</Link></li>
                <li className="links"><Link href="">Services</Link></li>
                <li className="links"><Link href="">Prices</Link></li>
                <li className="links"><Link href="">Contact Us</Link></li>

            </ul>
            <div className="hidden md:flex md:items-center md:justify-center ">
                <Button
                    text="Login"
                    img="user.svg"
                    design="px-6 py-4 bg-black text-white "

                />
            </div>
            <Image
                src="menu.svg"
                height={20}
                width={25}
                alt="menu"
                className="md:hidden cursor-pointer"
            />
        </nav>
    )
}

export default Navbar
