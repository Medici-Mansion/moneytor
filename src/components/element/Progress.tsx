import React from 'react'

interface ProgressProps {
  value: number
  max?: number
}

const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  const percentage = (value / max) * 100

  return (
    <div
      className='relative h-[4px] w-full rounded-full'
      style={{ backgroundColor: 'rgba(120, 120, 128, 0.16)' }}
    >
      <div
        className='h-full rounded-full'
        style={{
          width: `${percentage}%`,
          backgroundColor: '#4FC3D7',
          borderRadius: '100px',
        }}
      ></div>
    </div>
  )
}

export default Progress
