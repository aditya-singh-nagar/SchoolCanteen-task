import React, { useContext } from "react";
import { DataProvider } from "./Allwork";



const Products = ({elm:{foodname,foodcategory,foodprice,foodimage, foodquantity,id}}) => { 

  const {state,handleBuyBtn} = useContext(DataProvider)

  

  return (
    <>

    

       <div className="col-md-4" style={{ height: "45vh" }}>
      <div className="row g-0 border rounded overflow-hidden align-items-center mb-4 shadow-sm h-100">
        <div className="col-md-6 p-4 d-flex flex-column ">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
           <h3> {foodname} </h3>
          </strong>
          <h4 className="mb-0">{foodcategory}</h4> <br></br>
          <div className="mb-1 text-body-secondary overflow-hidden"> <h5>${foodprice}</h5></div> <br></br>
          <h6
            className="card-text mb-auto overflow-hidden"
            // style={{ height: "14vh" }}
          >
            {/* <h6>{foodquantity}</h6> */}
            {foodquantity}
          </h6>
        </div>
        <div className="col-md-6  ">
          <img
            src={foodimage}
            alt="" 
            className="bd-placeholder-img img-fluid "
            style={{ height: "200px", width:"190px" ,borderRadius:"10px"}}
          />
        </div>
        <div className=" my-1 d-flex justify-content-center">
          <button className="btn btn-info" 
          onClick={()=> handleBuyBtn(id) }
          >Buy Now</button>
          {/* <button className="btn btn-success mx-3">Add To Cart</button> */} 
        </div>
      </div>
    </div>
            
    </>
  );
};

export default Products;
