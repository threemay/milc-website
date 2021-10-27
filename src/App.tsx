import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const ScrollToTop = (props: any) => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return props.children
}

const App: React.FC<any> = () => (
	<Router>
		<ScrollToTop>
			<Switch>
				<Route path='/'  component={Home}>
					<Home />
				</Route>
			</Switch>
		</ScrollToTop>
	</Router>
)

export default App
