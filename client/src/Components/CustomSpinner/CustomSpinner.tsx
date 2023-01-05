import React from 'react'
import './CustomSpinner.scss'

interface IProps{
  showSpinner: boolean
}


export default function CustomSpinner({showSpinner}:IProps){


  return (
    <>
      {showSpinner ? 
        <div className="spinner"></div> : <></>
      }
    </>
      
    )
}