import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
        <Image src='/next.svg' height={50} width={25} alt="next-image" />
      <Link  href="/">
        <p>Home</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
      <Link href="/MJ">
        <p>Mujib Listing</p>
      </Link>
    </div>
  );
};

export default Navbar;
