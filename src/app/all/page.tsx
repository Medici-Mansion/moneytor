import React from 'react'

import CategoryItem from '~/components/element/CategoryItem'
import GoBackButton from '~/components/element/GoBackButton'
import { categoryItems } from '~/constant/categoryItems'

const sortedCategoryItems = categoryItems.sort(
  (a, b) =>
    parseInt(b.amount.replace(/,/g, '')) - parseInt(a.amount.replace(/,/g, '')),
)

const page = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col gap-6'>
        <GoBackButton />
        <div className='absolute left-1/2 -translate-x-1/2 transform text-[17px] text-[#8E8E93]'>
          All Expenses
        </div>
        <div className='text-[22px] font-bold'>
          Try to spend less than last time!
        </div>
        <div className='h-[1px] w-full bg-[#E5E5EA]'></div>
      </div>

      <section className='flex flex-col gap-6 py-10'>
        {sortedCategoryItems.map((item) => (
          <CategoryItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            amount={item.amount}
            width={item.width}
            height={item.height}
            bgColor={item.bgColor}
          />
        ))}
      </section>
    </main>
  )
}

export default page
