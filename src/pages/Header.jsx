import React from 'react'

const Header = () => {
  return (
    <div>
        {/* Header */}
      <header className="bg-teal-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">NyXSpectra OCR Gateway – AI-Powered Discharge Automation</h1>
        <div className="text-sm">Token Usage: 42,000 / 50,000</div>
      </header>
    </div>
  )
}

export default Header