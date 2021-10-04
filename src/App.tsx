import React from 'react'
import Test from './components/Test'
import style from './app.scss'

const App: React.FC<any> = () => (
	<div className={style.app}>
		<Test text='config test' project='MILC' />
	</div>
)

export default App
