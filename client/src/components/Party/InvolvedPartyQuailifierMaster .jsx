import React from 'react'
import { Button, Select, Input, Option } from '@material-tailwind/react'
const InvolvedPartyQuailifierMaster = () => {
  return (
    <div>
      <div className='mx-auto my-8'>


        <form className='flex flex-col w-1/2 bg-grey-50 p-10 shadow-md shadow-red-200  rounded'>
          <h3 className='text-2xl'> Involved Party Quailifier Master  </h3>
          <div className='flex flex-col my-4 gap-3 '>
            <div className='my-2'>
              <Input label="Involved party qualifier ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2">
              <Input label="Involved party Contact ID" type={'number'} color='grey' className='w-full' />
            </div>
            <div className="my-2 mx-1">
              <Select label="Communaction Type" color='grey'>
                <Option>Mail</Option>
                <Option>SMS</Option>
                <Option>Mobile</Option>
              </Select>
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

export default InvolvedPartyQuailifierMaster 