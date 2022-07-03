import React from 'react'
import Auth from './Auth';



const App = () => {


  // const initialValCheck = () => {
  //   const initialVal = JSON.parse(localStorage.getItem('isAuth'));

  //   if (!initialVal)
  //     return false
  //   else return initialVal
  // }

  // const [auth, setAuth] = useState(initialValCheck);


  // const logIn = () => {

  //   setAuth(true)

  //   setTimeout(() => {
  //     window.location.href = '/'
  //   }, 1000)
  // }
  // const logOut = () => {
  //   setAuth(false)
  //   setTimeout(() => {
  //     window.location.href = '/sign-in'
  //   }, 1000)
  // }



  // useEffect(() => {
  //   localStorage.setItem('isAuth', auth)
  // }, [auth])



  return (
    <>
      <Auth />
    </>
  )
}

export default App
