import React, { FC, useEffect } from 'react'
import useModeStore from '../store/ModeStore'
import ThemeService from '../service/ThemeService'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'

const ToggleButton: FC = () => {
	const darkMode = useModeStore(state => state.darkMode)
	const switchMode = useModeStore(state => state.switchMode)

	useEffect(() => {
		ThemeService.checkTheme()
	}, [darkMode])

	return (
		<div className='inline-flex items-center p-[2px] rounded-3xl dark:bg-zinc-600'>
			<button
				className={`${
					!darkMode ? 'bg-white text-black' : ''
				} cursor-pointer rounded-3xl p-2`}
				onClick={() => switchMode(darkMode!)}
			>
				{!darkMode ? <IoSunny /> : <IoMoon />}
			</button>
		</div>
	)
}

export default ToggleButton
