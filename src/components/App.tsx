import { useState } from 'react'
import classes from './App.module.scss'

export const App = () => {
	const [counter, setCounter] = useState(0)

	const inc = () => setCounter((prev) => ++prev)
	const dec = () => setCounter((prev) => --prev)

	return (
		<div className={classes.appContainer}>
			<h1>{counter}</h1>
			<button className={classes.button} onClick={inc}>
				inc
			</button>
			<button className={classes.button} onClick={dec}>
				dec
			</button>
		</div>
	)
}
