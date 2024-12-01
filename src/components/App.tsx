import { useState } from 'react'
import './App.scss'

export const App = () => {
	const [counter, setCounter] = useState(0)

	const inc = () => setCounter((prev) => ++prev)
	const dec = () => setCounter((prev) => --prev)

	return (
		<div className="app-container">
			<h1>{counter}</h1>
			<button onClick={inc}>inc</button>
			<button onClick={dec}>dec</button>
		</div>
	)
}
