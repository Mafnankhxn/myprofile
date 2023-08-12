import Image from 'next/image'
import Codeplays from './codeplays'
import Navbar from './navbar'
import Introduction from './introduction'
import Myskills from './myskills'
import Recentwork from './recentwork'
import Collaborate from './collaborate'
import Contactme from './contactme'
import Projectbase from './projectbase'
export default function Home() {
  return (
    <div>
      <Navbar/>
<Codeplays/>
<Introduction/>
<Myskills/>
<Recentwork/>
<Collaborate/>
<Contactme/>
<Projectbase/>
    </div>
  )
}
