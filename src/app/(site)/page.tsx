import { Spinner } from '@radix-ui/themes'
import { ModeToggle } from '~/components/compound/mode-toggle'
import { api, HydrateClient } from '~/trpc/server'
import { LatestPost } from '../_components/post'

export default async function Home() {
  const hello = await api.post.hello({ text: 'from tRPC' })

  void api.post.getLatest.prefetch()

  return (
    <HydrateClient>
      <main>
        {hello.greeting}
        <Spinner />
        <ModeToggle />

        <LatestPost />
      </main>
    </HydrateClient>
  )
}
