import React from 'react'

export default function Main(props) {
  const {data}=props
  return (
        <div className='imgContainer'>
        <img className='bgimg' src={data?.hdurl} alt={data?.title} />
        </div>
  )
}
