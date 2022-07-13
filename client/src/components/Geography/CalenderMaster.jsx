import React from 'react'
import { Button, Input } from '@material-tailwind/react'

const CalenderMaster = () => {
  return (
    <div>
      <div className='mx-auto my-8'>


        <form className='flex flex-col w-1/2 bg-grey-50 p-10 shadow-md rounded'>
          <h3 className='text-2xl'> Calender Master </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Calender ID" color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Calender Type" color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Calender Detail" color='grey' className='w-full' />
            </div>
          
            <div className='my-2'>
              <Button color='red' className='w-full'>Save</Button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default CalenderMaster