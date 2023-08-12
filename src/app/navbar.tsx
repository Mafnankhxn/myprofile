import Link from "next/link"
const navbar = () => {
  return (
    <nav className="border-b">
  <ul className="flex md:flex-row justify-center items-center gap-x-6 md:gap-x-10 text-lg md:text-xl text-white py-6 border-b md:border-b-0">
    <li className="hover:text-slate-200 transition duration-300">
    <a href="/">Home</a>
    </li>
    <li className="hover:text-slate-200 transition duration-300">
    <Link href="/">
            Profile
          </Link>
    </li>
    <li className="hover:text-slate-200 transition duration-300">
      <Link href="/">Experience</Link>
    </li>
    <li className="hover:text-slate-200 transition duration-300">
      <Link href="/">Contact me</Link>
    </li>
  </ul>
</nav>
  )
}

export default navbar
