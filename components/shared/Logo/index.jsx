import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <>

      <Link href = "/">
        <a>
          <Image src = "/assets/logo-games.png" alt = "Logo OneBitGames" width={220} height={40}/>
        </a>
      </Link>
    
      
    </>
  )
}

export default Logo