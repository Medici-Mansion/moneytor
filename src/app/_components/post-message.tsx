'use client'

import { useTransition } from 'react'
import { Button } from '~/components/ui/button'
import { bridge } from '~/lib/link-bridge'

export function PushNotifi() {
  const [isPending, pushNoti] = useTransition()
  return (
    <div className='w-full max-w-xs'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          pushNoti(async () => {
            await bridge.pushNotification({
              content: {
                title: 'Hi! Its’ Moneytor.',
                body: 'Bake Cookies 4 times this week..🍪🍪🍪\nCome to Moneytor and review your history',
                data: { data: 'goes here', test: { test1: 'more data' } },
                badge: 10,
                interruptionLevel: 'critical',
              },
              trigger: { seconds: 2 },
            })
          })
        }}
        className='flex flex-col gap-2'
      >
        <Button
          isLoading={isPending}
          type='submit'
          className='rounded-full px-10 py-3 font-semibold transition hover:bg-white/20'
          disabled={isPending}
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}
