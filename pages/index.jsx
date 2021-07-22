import MainComponent from '../components/shared/MainComponent'
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const router = useRouter()
  return (
   <MainComponent>        
     <Button onClick = {() => router.push('Auth/Login')}>Login</Button>
   </MainComponent>
  )
}
