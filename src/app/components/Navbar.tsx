
import Link from "next/link";
import "../styles/navbar.css";

function Nabvar() {
  return (
    <div className="nav-bar ">
      <Link href="/">Works</Link>

      <Link href="/">Blog</Link>

      <Link href="/">Contact</Link>
    </div>
  );
}

export default Nabvar;
