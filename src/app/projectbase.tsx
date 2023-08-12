import Link from "next/link"
const projectbase = () => {
  return (
    <div>
      <footer className='border-t border-black h-96 w-auto rounded-t-3xl'>
         <h1 className="text-center text-2xl font-bold mt-20">Living, learning, & leveling up</h1>
      <p className="text-center font-semi-bold text-xl mt-10">Handcrafted By Muhammad Afnan&copy;2023</p>
      <p className="text-center text-lg font-semibold mt-10">Made With <Link className="text-blue-500" href="https://tailwindcss.com/">Tailwind CSS</Link></p>
        </footer>
    </div>
  )
}

export default projectbase
