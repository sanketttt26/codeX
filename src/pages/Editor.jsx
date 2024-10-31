import React from 'react'
import { useParams } from 'react-router-dom';

const Editor = () => {
    const { language } = useParams();
  return (
    <div className='w-full '>
    <div className='flex gap-5 p-3'>
      {/* Input text area & generate button */}
        <div className='flex flex-col w-[60%]'>
            <div>
                {/* input area */}
                <p>Input box</p>
                {/* button */}
                <p>generate ai</p>
            </div>
            <div>
                {/* Code typing section here */}
                <textarea name="" id="" cols="30" rows="10" className='bg-[#eeeeee] w-full min-h-screen text-white rounded-lg border-none focus:ring-1'></textarea>
            </div>
        </div>
        {/* Input and output console + execute button */}
        <div className='w-[40%] flex flex-col px-5'>
            <div className='flex w-full items-center justify-end gap-3'>
              <button className='bg-black text-white px-2 py-1 rounded-md'>
              {language}
            </button>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-md'>Run</button>
            </div>
            <div>Input </div>
            <div> output </div>
        </div>
    </div>

    </div>
  )
}

export default Editor
