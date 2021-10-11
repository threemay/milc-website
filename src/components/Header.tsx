import React from 'react'
import NavLink from './NavLink'

interface IHeaderProps {
	text?: string
	project?: string
}

const Header: React.FC<IHeaderProps> = () => (
	<div>
		<ul>
			<NavLink text='Home' link='#' />
			<NavLink text='Finding a Tutor' link='/#/tutors' />
			<NavLink text='Account' link='/#/account' />
		</ul>
	</div>
)

export default Header
