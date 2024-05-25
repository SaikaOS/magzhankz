import MainPage from "@/components/layout/MainPage"
import { Ubuntu} from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' })

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
      <div className={`${ubuntu.className} bg-[#F6F7F9] min-h-screen`}>
     <MainPage searchParams={searchParams} isMainPage={true} />
      </div>
  )
}
