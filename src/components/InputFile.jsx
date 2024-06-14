import React from 'react'

function InputFile() {
    return (
      <div className="relative w-full flex-1">
        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" name="file"/>
        <div className="rounded-xl p-1 w-full flex-1 pl-3 bg-white border border-gray-300 flex items-center justify-between">
          <span className="text-gray-500">Choose a file...</span>
          <button className="bg-blue-500 text-white py-1 px-3 rounded-xl">Browse</button>
        </div>
      </div>
    )
  }

export default InputFile