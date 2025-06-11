import React from 'react'
import Skills from './Skills'

const sections = [
  { title: 'Languages', items: ['TypeScript', 'Lua', 'Python', 'JavaScript'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'Frameworks', items: ['React', 'Next.js', 'Vue'] },
  { title: 'Tools', items: ['Git', 'Docker'] },
  { title: 'Other', items: ['Linux', 'CLI'] },
]

function groupIntoRows(array, size) {
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

export default function SkillsList() {
  const rows = groupIntoRows(sections, 3)

  return (
    <div className="flex flex-col gap-10">
      {rows.map((row, idx) => (
        <div key={idx} className="flex gap-6">
          {row.map((section, index) => (
            <Skills key={index} title={section.title} items={section.items} />
          ))}
        </div>
      ))}
    </div>
  )
}
