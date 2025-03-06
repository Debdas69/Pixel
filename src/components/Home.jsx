import React from 'react'

const Home = ({images}) => {
  return (
    <div className='container-fluid'>
      <div className="flex">

      {images.map((image,index) => {
      return (
        <div key={index} className='items'>
          <img src={image.src.medium} alt="images"/>
        </div>
      )
    })}
      </div>
    
    </div>
  )
}

export default Home