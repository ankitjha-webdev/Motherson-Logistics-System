import React from 'react'
import { Button,  Input,  } from '@material-tailwind/react'
const ContactMaster = () => {
  return (
    <div>
      <div className='mx-auto my-8'>


        <form className='flex flex-col w-1/2 bg-grey-50 p-10 shadow-md rounded'>
          <h3 className='text-2xl'> Contact Master </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className="my-2">
              <Input label="Contact ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Contact Name" color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Contact Designation" color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Contact Email" color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Contact Phone" type={'number'} color='grey' className='w-full' />
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

export default ContactMaster