import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import Products from './Products'
import { DataProvider } from './Allwork'

const SnacksPage = () => {

    const{getFoodList,state:{foodList}} = useContext(DataProvider)
    useEffect(()=>{
        getFoodList()
    },[])
  return (
    <div className='container'>
        <div className="row">
          {/* {console.log(foodList)} */}
          {foodList.map((elm,ind)=> <Products elm= {elm}/>)}
        </div>
    </div>
  )
}

export default SnacksPage