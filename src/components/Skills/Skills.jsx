import React from 'react'

export default function Skills({ title, items }) {
  return (
    <div className="bg-transparent text-gray-300 w-52 rounded border border-gray-600 text-sm">
      <div className="border-b border-gray-600 p-2 mb-2 font-semibold text-white">
        {title}
      </div>
      <div className="flex flex-col gap-1 p-2 break-words">
        {items.map((item, index) => (
          <span key={index} className="break-words">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
