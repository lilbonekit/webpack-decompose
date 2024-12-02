import { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import kittyCat from '@/assets/cat.jpg'
import Icon from '@/assets/icon.svg'

// function toDo(a: number) {
// 	console.log(`TODO: ${a}`)
// }

export const App = () => {
	const [counter, setCounter] = useState(0)

	const inc = () => setCounter((prev) => ++prev)
	const dec = () => setCounter((prev) => --prev)

	// if (__PLATFORM__ === 'desktop') {
	// 	return <div>Desktop platform</div>
	// }

	// // let's check it separately
	// // toDo('ts check')

	// if (__PLATFORM__ === 'mobile') {
	// 	return <div>Mobile platform</div>
	// }

	return (
		<div data-testid="App" className={classes.appContainer}>
			<Link to={'/about'}>About</Link>
			<Link to={'/shop'}>Shop</Link>
			<h1>{counter}</h1>
			<h2 data-testid="platform">PLATFORM={__PLATFORM__}</h2>
			<button className={classes.button} onClick={inc}>
				inc
			</button>
			<button className={classes.button} onClick={dec}>
				dec
			</button>
			<div>{kittyCat}</div>
			<img width={100} height={100} src={kittyCat} alt="cat" />
			<Outlet />
			<Icon width={200} height={200} />
		</div>
	)
}
