import React from 'react'
import Allwork from './Allwork'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import SnacksPage from './SnacksPage'
import NotFound from './NotFound'
import StudentPageContainer from './StudentPageContainer'
import NewModal from './NewModal'
import StudentDetailContainer from './studentDetailContainer'
import NewModal2 from './NewModal2'

const RoutingArea = () => {
    const ways = createBrowserRouter([
        {path:"/" , element:<Navbar/>, children:[{path:"/",element:<SnacksPage/>},{path:"/student", element:<StudentPageContainer/>},{path:"/studentDetail" ,element:<StudentDetailContainer/>}] } ,
        {path:"/*" , element:<NotFound/>}
    ])
  return (
    <Allwork> 
      <NewModal/>
      

        <RouterProvider router={ways}/>

    </Allwork>
  )
}

export default RoutingArea