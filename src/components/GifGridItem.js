import React from 'react'

export const GifGridItem = ({title, url }) => {
    
    return (
        <div className="card">
            <img  src={ url } alt={ title } />
            <p className='animate__animated animate__zoomIn'>{ title }</p>
        </div>
  )
}






