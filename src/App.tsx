import Header from './component/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MathHead from './component/MathHead'
import React from 'react'
import Equipment from './pages/Equipment'

const App = () => {
	return (
		<>
			<Header />
			<MathHead />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/card/:id' element={<Equipment />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</>
	)
}

export default App
