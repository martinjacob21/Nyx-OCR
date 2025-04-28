import React, { useRef, useState } from 'react'
// import React, { useState, useRef } from "react";



const Home = () => {
     const [dragging, setDragging] = useState(false);
      const fileInputRef = useRef(null);
    
      const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
      };
    
      const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        console.log("Dropped files:", files);
        // Handle files here
      };
    
      const handleFileChange = (e) => {
        const files = e.target.files;
        console.log("Selected files:", files);
        // Handle files here
      };
    
      const openFileDialog = () => {
        fileInputRef.current.click();
      };
  return (
    <>
     <div className="min-h-screen bg-gray-100">
      
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-60 bg-teal-50 p-4">
          <h2 className="font-bold mb-4">Navigation</h2>
          <ul className="space-y-2 text-gray-700">
            <button className='flex flex-wrap bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300' >Upload History</button>
            <button className='flex flex-wrap bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300'>Drafts</button>
            <button className='flex flex-wrap bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 transition duration-300'>Settings</button>
          </ul>
        </aside>

        {/* Upload and AI Output */}
        <main className="flex-1 p-8">
          {/* Upload Section */}
          <div
            className={`border-2 ${dragging ? 'border-teal-600 bg-teal-100' : 'border-dashed border-teal-400'} p-8 mb-6 flex flex-col justify-center items-center text-teal-600 cursor-pointer`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            <p className="mb-2">📤 Click or Drag File Here to Upload Document</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* AI Outputs */}
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="brain">🧠</span> AI Outputs
            </h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                📝 Discharge Summary
              </button>
              <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-semibold py-2 px-4 rounded">
                🩺 ICD Codes
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                📄 Referral Letter
              </button>
              <button className="bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold py-2 px-4 rounded">
                📋 Progress Notes
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
                ⚙️ HIS-Formatted Data
              </button>
            </div>

            {/* Push to HIS Button */}
            <button className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-2 px-6 rounded">
              ✅ Push to HIS
            </button>
          </section>
        </main>
      </div>

      
    </div>
    </>
  )
}

export default Home