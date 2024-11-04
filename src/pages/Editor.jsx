import React from 'react'
import { useParams } from 'react-router-dom';

const Editor = () => {
    const { language } = useParams();
  return (
    <div className='w-full '>
    <div className='flex gap-5 p-3'>
      {/* Input text area & generate button */}
        <div className='flex flex-col w-[60%] gap-2'>
            <div className='mt-5'>
                {/* input area */}
                 <label htmlFor="problemStatement" className="text-lg font-semibold text-gray-700 mt-5 dark:text-white">
                Enter your problem statement here, and let the AI code for you!
            </label>
            <textarea
                id="problemStatement"
                className="w-full h-40 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 mt-5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none dark:bg-gray-800 dark:text-white"
                placeholder="Describe the code or functionality you need..."
            />
            
                {/* button */}
                <button className='bg-blue-500 text-white px-2 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 mt-2'
                type='submit'
                >Generate with AI</button>

            </div>
            <div>
                {/* Code typing section here */}
                <textarea name="" id="" cols="30" rows="10" className='w-full h-screen px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg resize-none dark:bg-gray-800'></textarea>
            </div>
        </div>
        {/* Input and output console + execute button */}
        <div className='w-[40%] flex flex-col px-5'>
            <div className='flex w-full items-center justify-end gap-3'>
              <button className='bg-black text-white px-2 py-1 rounded-md dark:bg-white  dark:text-black '>
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
