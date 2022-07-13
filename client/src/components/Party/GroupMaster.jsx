import { Button, Textarea, Switch, Input, Typography } from '@material-tailwind/react'
import React from 'react'

const GroupMaster = () => {
    return (
        <div className='mx-auto my-8'>


            <form className='flex flex-col w-1/2 bg-grey-50 p-10 shadow-md rounded hover:shadow-xl hover:shadow-gray-500'>
                <h3 className='text-2xl'> Group Master </h3>
                <div className='flex flex-col my-4 gap-3 '>
                    <div className='my-2'>
                        <Input label="Group ID" color='grey' className='w-full' />
                    </div>
                    <div className="my-2">
                        <Input label="Location ID" type={'number'} color='grey' className='w-full' />
                    </div>
                    <div className="my-2">
                        <Input label="Contact ID" type={'number'} color='grey' className='w-full' />
                    </div>
                    <div className='my-2'>
                        <Textarea label="Group Detail" color='grey' />
                    </div>
                    <div className="my-2 mx-1">
                        <Typography label="Group Type" className='w-full font-normal'>Domain Yes/No </Typography>
                        <Switch color="red" defaultChecked />
                    </div>
                    <div className='my-2'>
                        <Button color='red' className='w-full'>Save</Button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default GroupMaster