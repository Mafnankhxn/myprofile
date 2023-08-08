import Link from "next/link"
import { Facebook } from "lucide-react"
import { Instagram } from 'lucide-react';
import  {Twitter } from "lucide-react"
import { Linkedin } from "lucide-react"
const contactme = () => {
  return (
    <div>
     <section>
        <div>
            <h2 className="font-bold text-5xl mt-20 text-center">How To Contact Me?</h2>
        <p className="text-center font-semibold text-2xl mt-20">Catch Me On <Link className="text-white bg-transparent hover:bg-green-600 p-1 rounded-xl" href="https://www.fiverr.com/" passHref={true}>Fiverr</Link></p>
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center mt-10">OR</h1>
          <ul className="flex justify-center mt-10 gap-x-10 pb-20">
            <li><Link href="https://www.facebook.com/profile.php?id=100044021255904"><Facebook/></Link></li>
            <li><Link href="https://www.instagram.com/afnankhan789b/"><Instagram/></Link></li>
            <li><Link href="https://twitter.com/afnan_khan909"><Twitter/></Link></li>
            <li><Link href="https://www.linkedin.com/in/muhammad-afnan-ba45b726a/"><Linkedin/></Link></li>
          </ul>
        </div>
     </section>
    </div>
  )
}

export default contactme
