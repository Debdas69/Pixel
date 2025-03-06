import React from 'react'

const Navbar = ({setSearch}) => {
  return (
    <>
      <div className="nav mt-3">
        <div className="button btn btn-outline-primary mx-3" >Nature</div>
        <div className="button btn btn-outline-info mx-3" >Travel</div>
        <div className="button btn btn-outline-warning mx-3" >City</div>
        <div className="button btn btn-outline-primary mx-3" >Car</div>
        <div className="button btn btn-outline-info mx-3" >Fashion</div>
        <div className="button btn btn-outline-secondary mx-3" >Animals</div>
        <div className="button btn btn-outline-primary mx-3" >Technology</div>
        <div className="button btn btn-outline-info mx-3" >Business & Finance</div>
        <div className="button btn btn-outline-warning mx-3" >Tokyo</div>
        <div className="button btn btn-outline-primary mx-3" >Dubai</div>
        <div className="button btn btn-info mx-3" >Saved</div>
      </div>

      <div className="container my-4" style={{width:"780px"}}>
        <div className="mb-3">        
          <input type="email" className="form-control bg-dark text-light" id="exampleFormControlInput1" placeholder="Serch Here..." 
          onChange={(e)=>setSearch(e.target.value)}
          />
          
        </div>
      </div>
    </>
  )
}

export default Navbar