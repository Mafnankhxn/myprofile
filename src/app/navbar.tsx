import Link from "next/link"
const navbar = () => {
  return (
    <nav>
  <ul className="flex md:flex-row justify-center items-center gap-x-6 md:gap-x-10 text-lg md:text-xl text-white py-6 border-b md:border-b-0">
    <li className="hover:text-slate-200 transition duration-300">
    <Link href="/">
            Home
          </Link>
    </li>
    <li className="hover:text-slate-200 transition duration-300">
    <Link href="/myskills">
            Profile
          </Link>
    </li>
    <li className="hover:text-slate-200 transition duration-300">
      <a href="#">Experience</a>
    </li>
    <li className="hover:text-slate-200 transition duration-300">
      <a href="#">Contact me</a>
    </li>
  </ul>
</nav>
  )
}

export default navbar
