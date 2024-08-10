import { Spinner } from '@radix-ui/themes'
import { ModeToggle } from '~/components/compound/mode-toggle'
import { api, HydrateClient } from '~/trpc/server'
import { PushNotifi } from '../_components/post-message'
import Image from 'next/image'
import CategoryItem from '~/components/element/CategoryItem'

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

export default async function Home() {
  return (
    <HydrateClient>
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
            Try to spend less than last time!
          </div>
          <div className='h-[1px] w-full bg-[#E5E5EA]'></div>
        </div>

        {/* <PushNotifi /> */}

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
        <section className='flex items-center justify-center'>
          <div className='flex w-full items-center justify-center rounded-xl border-[#F2F2F7] bg-[#4FC3D7] px-[14px] py-[8px]'>
            <span className='text-[17px] text-[#FFF]'>Set a budget</span>
          </div>
        </section>
      </main>
    </HydrateClient>
  )
}
