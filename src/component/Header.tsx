import React from 'react'
import ToggleButton from './ToggleButton'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className='fixed w-full p-2 z-20 backdrop-blur-md'>
			<div className='mx-auto max-w-3xl'>
				<nav className='flex items-center justify-between gap-3 text-base'>
					<Link to='/' className='group'>
						<h2 className='font-bold tracking-tighter p-2 text-lg'>Anthony</h2>
					</Link>
					<div className='flex items-center gap-4'>
						<div className='items-center gap-6 hidden md:flex'>
							<NavLink to={'/about'}>About</NavLink>
							<NavLink to={'https://github.com/AntonLan'}>GitHub</NavLink>
							<NavLink to={'https://www.linkedin.com/in/anton-gerasimov-986253216/'}>LinkedIn</NavLink>
						</div>
						<div className='flex-1'></div>
						<ToggleButton />
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
