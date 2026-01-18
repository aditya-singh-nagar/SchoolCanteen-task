import axios from 'axios'
import React, {  createContext, useReducer } from 'react'  
export const DataProvider = createContext() 



    let initialState = {
        allFoodList : [] ,
        foodList : [] ,
        studentList : [] , 
        inpVal : "" ,
        showForm : false ,
        snackDetail : {
            foodname : "" ,
            foodcategory : "" , 
            id :"" ,
            foodquantity : "" ,
            foodprice : ""

        },
        name : "" , 
        quantity : 0 ,
        order :{ 
            snackName : "" ,
            SnackQuantity : "",
            totalAmount : "" ,

        }, 

        studentForm:{
            name : "" ,
            referralCode : 0 ,
            totalSpent : 0
        },

        studentDetailList : []

    }

    // const {snackDetail,name,quantity,order} = initialState 
    // const {foodname,foodprice} = snackDetail

    const reducerFun = (state,action)=>{
        let updatedState = state 
        if (action.type == "foodList") {
            updatedState = {...updatedState ,foodList:action.payload , allFoodList:action.payload} 
        
        }

        else if (action.type == "studentList"){
            updatedState = {...updatedState , studentList : action.payload}

        }
          else if (action.type == "input"){
            updatedState = {...updatedState , inpVal : action.payload}

        }

           else if (action.type == "search"){
            let filteredList = state.allFoodList.filter((elm)=> elm.foodname.toLowerCase().includes(action.payload.toLowerCase())) 
        
            updatedState = {...updatedState , foodList:filteredList}

        }
        else if (action.type == "show") {
            updatedState = {...updatedState , showForm:action.payload}
            
        }
          else if (action.type == "singleFood") {
            updatedState = {...updatedState , snackDetail:action.payload}
            
        }
          else if (action.type == "nameInp") {
            updatedState = {...updatedState , name:action.payload}
            
        }
         else if (action.type == "quantityInp") {
            updatedState = {...updatedState , quantity:action.payload}
            
        }
        else if (action.type == "searchName"){
               let filteredList = state.studentList.filter((elm)=> elm.name.toLowerCase().includes(action.payload.toLowerCase())) 
               if (filteredList.length == 0) { 
                state.quantity = 0
                alert("please register yourself as a student first")
                
               }
        }

        else if (action.type == "studentDetail"){
            updatedState = {...updatedState , studentDetailList : action.payload  }
        }

           else if (action.type == "studentForm"){
            updatedState = {...updatedState , studentForm : {...studentForm , ...action.payload}  }
        }


      
        



        return updatedState

    }

    export let randNo = 1

const Allwork = ({children}) => {


    const [state,dispatch] = useReducer(reducerFun,initialState)  

    const getFoodList = async ()=> {
        let res = await axios.get("http://localhost:3000/FoodList")
        dispatch({type:"foodList" , payload:res.data})
        // console.log(res.data)
    }

    const getStudentList = async ()=>{
        let res = await axios.get("https://694aa5e826e8707720662d4a.mockapi.io/students-data") 
        dispatch({type:"studentList" , payload:res.data})
    } 

    const getSinglefood = async (id)=>{
        let res = await axios.get(`http://localhost:3000/FoodList/${id}`) 
        dispatch({type:"singleFood" , payload:res.data}) 
        console.log(res.data)
    } 

    const getStudentDetail = async ()=>{
        let res = await axios.get("http://localhost:3000/studentDetail") 
        dispatch({type:"studentDetail" , payload:res.data })
    }

    const addStudent = (user)=>{
        let res = axios.post(`https://694aa5e826e8707720662d4a.mockapi.io/students-data`,user) 
        getStudentList()
    }

    const handleBuyBtn = (id)=>{
        getSinglefood(id) 
        dispatch({type:"show" , payload:true}) 
    }

    const handleClose = ()=>{
        dispatch({type:"quantityInp" , payload:0})
        dispatch({type:"show" , payload:false})
    }

    const rand = ()=>{
     randNo =  Math.floor(Math.random*10000) 
     return randNo
     
    }

  
    

    



   
    
  return (
    <DataProvider value={{state,dispatch,getFoodList ,getStudentList,handleBuyBtn ,getStudentDetail ,handleClose,addStudent}}> 
        {children} 
    </DataProvider>
  )
}

export default Allwork