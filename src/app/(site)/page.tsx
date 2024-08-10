'use client'

import { PushNotifi } from '../_components/post-message'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CategoryItem from '~/components/element/CategoryItem'
import { useState } from 'react'

const categoryItems = [
  {
    id: 1,
    icon: '/svg/taxi.svg',
    title: 'Taxi',
    amount: '180,000 KRW',
    bgColor: 'rgba(255,204,0,0.10)',
  },
  {
    id: 2,
    icon: '/svg/apple.svg',
    title: 'Apple Service',
    amount: '200,000 KRW',
    width: 30,
    height: 37,
    bgColor: '#F2F2F7',
  },
  {
    id: 3,
    icon: '/svg/coffee.svg',
    title: 'Coffee',
    amount: '400,000 KRW',
    bgColor: 'rgba(52, 199, 89, 0.10)',
  },
  {
    id: 4,
    icon: '/svg/food.svg',
    title: 'Food',
    amount: '710,000 KRW',
    bgColor: 'rgba(52, 199, 89, 0.10)',
  },
  {
    id: 5,
    icon: '/svg/hospital.svg',
    title: 'Medical',
    amount: '80,000 KRW',
    bgColor: 'rgba(52, 199, 89, 0.10)',
  },
]

const sortedCategoryItems = categoryItems.sort(
  (a, b) =>
    parseInt(b.amount.replace(/,/g, '')) - parseInt(a.amount.replace(/,/g, '')),
)

export default function Home() {
  const router = useRouter()
  const [isBudgetSet, setIsBudgetSet] = useState(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const isAnyItemSelected = selectedItems.length > 0

  const handleButtonClick = () => {
    if (isAnyItemSelected) {
      // 하나라도 선택시 budget 페이지로 이동 가능
      router.push('/budget')
    } else {
      setIsBudgetSet(true)
    }
  }

  const handleCategoryItemClick = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <main className='w-full'>
      <div className='flex flex-col gap-6'>
        <div className='p-[10px]'>
          <Image src='/svg/prev.svg' width={14} height={14} alt='Go Back' />
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 transform text-[17px] text-[#8E8E93]'>
          All Expenses
        </div>

        {/* 월별 선택 섹션 */}
        {/* <div className='flex items-center'>
            <div className='p-[10px]'>
              <Image
                src='/svg/before.svg'
                width={14}
                height={14}
                alt='Go Back'
              />
            </div>
            <span>Aug</span>
            <div className='p-[10px]'>
              <Image
                src='/svg/after.svg'
                width={14}
                height={14}
                alt='Go Back'
              />
            </div>
          </div> */}

        <div className='text-[22px] font-bold'>
          {isBudgetSet
            ? 'Select the categories to reduce'
            : 'Try to spend less than last time!'}
        </div>
        <div className='h-[1px] w-full bg-[#E5E5EA]'></div>
      </div>

      <PushNotifi />

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
            onClick={() => handleCategoryItemClick(item.id)}
            clickable={isBudgetSet}
            isSelected={selectedItems.includes(item.id)}
          />
        ))}
      </section>
      <section className='flex items-center justify-center'>
        <div
          onClick={handleButtonClick}
          className={`flex w-full items-center justify-center rounded-xl px-[14px] py-[8px] ${
            isAnyItemSelected
              ? `bg-[#4FC3D7]`
              : isBudgetSet
                ? `bg-gray-500`
                : `bg-[#4FC3D7]`
          }`}
        >
          <span className='text-[17px] text-[#FFF]'>
            {isBudgetSet && !isAnyItemSelected ? 'Get Started' : 'Set a budget'}
          </span>{' '}
        </div>
      </section>
    </main>
  )
}
