import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LazyAbout, LazyShop } from './pages'
import { Suspense } from 'react'
const root = document.getElementById('root')

if (!root) {
	throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<LazyAbout />
					</Suspense>
				),
			},
			{
				path: '/shop',
				element: (
					<Suspense fallback={<p>Loading...</p>}>
						<LazyShop />
					</Suspense>
				),
			},
		],
	},
])

container.render(<RouterProvider router={router} />)
