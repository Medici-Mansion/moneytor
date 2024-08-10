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
    percentage: '45%',
    amount: '180,000 KRW',
    bgColor: 'rgba(255,204,0,0.10)',
  },
  {
    id: 2,
    icon: '/svg/apple.svg',
    title: 'Apple Service',
    percentage: '30%',
    amount: '120,000 KRW',
    width: 30,
    height: 37,
    bgColor: '#F2F2F7',
  },
  {
    id: 3,
    icon: '/svg/coffee.svg',
    title: 'Coffee',
    percentage: '25%',
    amount: '400,000 KRW',
    bgColor: 'rgba(52, 199, 89, 0.10)',
  },
]

export default async function Home() {
  return (
    <HydrateClient>
      <main className='w-full'>
        <div className='flex flex-col gap-6'>
          <div className='p-[10px]'>
            <Image src='/svg/prev.svg' width={14} height={14} alt='Go Back' />
          </div>
          <div className='flex items-center'>
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
          </div>
          <div className='h-[1px] w-full bg-[#E5E5EA]'></div>
        </div>

        {/* <PushNotifi /> */}
        <section className='mt-6 flex flex-col gap-6'>
          <div className='flex justify-between'>
            <div>TOTAL</div>
            <div className='flex items-center gap-1'>
              <span>400,000 KRW</span>
              <span className='flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F2F2F7]'>
                <Image src='/svg/edit.svg' height={14} width={14} alt='edit' />
              </span>
            </div>
          </div>
          <div className='h-[31px] w-full rounded-[100px] bg-[#FFD913]'></div>
        </section>

        <section className='flex flex-col gap-6 py-10'>
          {categoryItems.map((item) => (
            <CategoryItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              percentage={item.percentage}
              amount={item.amount}
              width={item.width}
              height={item.height}
              bgColor={item.bgColor}
            />
          ))}
        </section>
        <section className='flex items-center justify-center'>
          <div className='rounded-full border-[1.4px] border-[#F2F2F7] bg-white px-[14px] py-[8px]'>
            <span className='font-sans text-[15px] text-[#8E8E93]'>
              View All Expenses
            </span>
          </div>
        </section>
      </main>
    </HydrateClient>
  )
}
