import Link from 'next/link';

export default function Home() {
    return (
      <main className='p-4'>
        <h1>Welcome to the Homepage</h1>

        <section className='p-4'>
          <h2 className='pb-1'>List of static pages:</h2>
          <ul className='pl-4 list-disc'>
            <li className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <Link href="/rings/sra1236-women-glanza-solitare-engagement-rings">GLANZA</Link>
            </li>  

            <li className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <Link href="/rings/ara1205-women-ella-solitare-engagement-rings">ELLA</Link>
            </li> 

            <li className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <Link href="/rings/ara1298-women-arena-solitare-engagement-rings">ARENA</Link>
            </li>

            <li className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <Link href="/rings/ara1382-women-swathe-solitare-engagement-ring">SWATHE</Link>
            </li>  

            <li className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <Link href="/rings/ara1208-women-camila-solitare-engagement-rings">CAMILA</Link>
            </li>

            <li className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              <Link href="/rings/ara1345-women-astral-solitare-engagement-rings">ASTRAL</Link>
            </li>
          </ul>
        </section>

      </main>
    )
  }
  