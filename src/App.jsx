import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.scss'
import Tariffs from './pages/Tariffs'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/tariffs' element={<Tariffs />} />
			</Routes>
			<div className='element-left'></div>
			<div className='element-right'></div>
		</>
	)
}

export default App
