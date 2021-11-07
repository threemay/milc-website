import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import TutorList from './pages/TutorList'
import Account from './pages/Account'
import Header from './components/Header'
import './app.scss'

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
			<Header />
			<Switch>
				<Route exact path='/'  component={Home}>
					<Home />
				</Route>
				<Route path='/tutors'>
					<TutorList />
				</Route>
				<Route path='/account'>
					<Account />
				</Route>
				</Switch>
		</ScrollToTop>
	</Router>
)

export default App
