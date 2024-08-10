import Image from 'next/image'
import React from 'react'
import CategoryItemWithStatusBar from '~/components/element/CategoryItemWithStatusBar'

const categoryItems = [
  {
    id: 1,
    icon: '/svg/taxi.svg',
    title: 'Taxi',
    amount: '50,000 KRW',
    bgColor: 'rgba(255,204,0,0.10)',
    value: 50,
  },
  {
    id: 2,
    icon: '/svg/apple.svg',
    title: 'Apple Service',
    amount: '80,000 KRW',
    width: 30,
    height: 37,
    bgColor: '#F2F2F7',
    value: 75,
  },
  {
    id: 3,
    icon: '/svg/coffee.svg',
    title: 'Coffee',
    amount: '10,000 KRW',
    bgColor: 'rgba(52, 199, 89, 0.10)',
    value: 20,
  },
]

const page = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col gap-6'>
        <div className='p-[10px]'>
          <Image src='/svg/prev.svg' width={14} height={14} alt='Go Back' />
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 transform text-[17px] text-[#8E8E93]'>
          Budgets
        </div>
        <div className='text-[22px] font-bold'>Today</div>
        <div className='h-[1px] w-full bg-[#E5E5EA]'></div>
      </div>

      <section className='flex flex-col gap-6 py-10'>
        {categoryItems.map((item) => (
          <CategoryItemWithStatusBar
            key={item.id}
            {...item}
            isSelected={false}
            clickable
            value={item.value}
          />
        ))}
      </section>
    </main>
  )
}

export default page
