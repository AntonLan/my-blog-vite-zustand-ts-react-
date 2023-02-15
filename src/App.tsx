import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MathHead from './component/MathHead'

const App = () => {
	return (
		<>
			<Header />
			<MathHead/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	)
}

export default App
