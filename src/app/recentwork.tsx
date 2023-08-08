import { ButtonDemo } from "./butten"
import Link from "next/link"
const recentwork = () => {
  return (
    <section className="grid justify-center flex-wrap">
       <h1 className="font-bold text-5xl mt-20 text-center">
       My Recent Work
       </h1>
       <p className="font-semibold text-lg mt-5 text-center">
        Here are some of my recently completed projects.
       </p>
       <div className="mt-20 grid justify-center gap-y-5">
        <div className="flex justify-center gap-x-5">
            <span className="flex-1"><Link href="https://wfdesignbuild.com/"><img className="rounded-xl" src="company1.png" alt="brand" /></Link></span>
            <span className="flex-1"><Link href="https://burkettandco.ca/"><img className="rounded-xl" src="company2.png" alt="brand" /></Link></span>
            <span className="flex-1"><Link href="https://www.chronicled.com/"><img className="rounded-xl" src="company3.png" alt="brand" /></Link></span>
        </div>
        <div className="flex justify-center gap-x-5 ">
            <span className="flex-1"><Link href="https://www.glcsolutions.ca/"><img className="rounded-xl" src="company4.png" alt="" /></Link></span>
            <span className="flex-1"><Link href="http://coupalcranes.com/"><img className="rounded-xl" src="company5.png" alt="" /></Link></span>
            <span className="flex-1"><Link href="https://www.wedler.com/"><img className="rounded-xl" src="company6.png" alt="" /></Link></span>
        </div>
       </div>
       <ButtonDemo/>
    </section>
  )
}

export default recentwork
