import React from 'react'
import Loader from './Loader'


const Save = ({saved, loader}) => {

  return (
    <>
    
    <div className='container-fluid text-center' id='top'>

{
  loader | saved.length === 0 ? (
    <Loader/>
 ):(
   <>
   <div className="flex">
   {saved.map((image,index) => {
  return (
    <div key={index} className='items'>
      <img src={image.src.medium} alt={image.photographer}/>
    </div>
  )
})}

  </div>
  
    </>
   
 )
}
  
    {
      saved.length !=0 && (
        <a href='#top' className='btn btn-warning my-5'>Back To Top</a>
      )
    }
</div>
    </>
  )
}

export default Save