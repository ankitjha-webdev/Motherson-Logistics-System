import React from 'react'
import { Button } from '@material-tailwind/react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import msslLogo from '../images/mssl-2021.jpg'
import cryingEmoji from '../images/cryingEmoji.gif'
const ErrorPage = () => {


  return (
    <div className='grid place-items-center mt-20'>

      <img src={msslLogo} alt="logo" className="w-24 h-24" />

      <span className='my-12 text-7xl rounded-full bg-gray-300'> <img src={cryingEmoji} className="w-32 h-32" alt="" srcset="" /> </span>
      <Typography variant="h2" className='text-red-400 font-mono animate-pulse  font-extrabold'>
        Oops, Page not found!
      </Typography>
      <div className='mt-12 '>
        <Typography variant="lead" >
          <div>
            <span className='grid text-grey-500 font-medium '>
              <span className='grid-6'>We are very sorry for the inconvenience. It looks like you're trying to</span>
              <span className='grid-6 mx-auto'> access a page that has been deleted or never even existed.</span>
            </span>
          </div>

        </Typography>
      </div>
      <div className='mt-12'>
        <Button variant="contained" color='red'>
          <Link to='/' className='text-white'> Go to home</Link>
        </Button>
      </div>
    </div>
  )
}

export default ErrorPage;