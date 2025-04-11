
import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)


    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://media.istockphoto.com/id/1664876848/photo/happy-crossed-arms-and-portrait-of-asian-man-in-studio-smile-for-career-work-and-job.jpg?s=612x612&w=0&k=20&c=2vYaOMnlmzMEmB441bTWHUyeFXRIh56wE79QAhVWYBk=" alt="" />
                    <h4 className='text-lg font-medium capitalize'>{captain?.fullname?.firstname || "Captain"}</h4>
                </div>
                <div className='flex items-center flex-col'>
                    <h4 className='font-semibold'>₹XXX.XX</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>

        </div>
    )
}

export default CaptainDetails