import React from 'react'

export default function Menu({lista}) {
  const size = lista.length


  return (
    <div>{
      lista.map((item,index)=>{
        
        return <button key={index}>{item}</button>  

      }
      )}
      </div>
  )
}
