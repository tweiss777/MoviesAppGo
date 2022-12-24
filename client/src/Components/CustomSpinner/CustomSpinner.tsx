import React from 'react'
import './Spinner.scss'

interface IProps{
  showSpinner: boolean
}


export default function CustomSpinner({showSpinner}:IProps){


  return (
    <>
      {showSpinner ? 
        <div className="spinner"></div>: <></>
      }
    </>
      
    )
}