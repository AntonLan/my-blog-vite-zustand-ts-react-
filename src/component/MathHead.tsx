import { FC } from 'react'
import banner from '@/assets/banner.jpg'

const MathHead: FC = () => {
	return (
		<div className='bg-white opacity-50'>
			<div className='absolute w-full h-[350px] overflow-hidden'>
				<img className='bg-cover' src={banner} alt='banner' />
			</div>
			<div className='z-10 pt-[15%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] xl:pt-[10%] 2xl:pt-[8%] text-center px-8 drop-shadow-lg shadow-black'>
				<h1 className='uppercase text-sm mb-4'>Welcome to</h1>
				<h1 className='text-4xl font-medium'>
					A curated list of the tech I{' '}
					<span className='text-orange-500'>use</span>
				</h1>
			</div>
		</div>
	)
}

export default MathHead
