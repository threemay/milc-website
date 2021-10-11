import React from 'react'
import './index.scss'

interface INavLinkProps {
	text: string
	link: string
}

const NavLink: React.FC<INavLinkProps> = ({ text, link = '#' }) => (
	<li>
		<a href={link} className='navLink'>
			{text}
		</a>
	</li>
)

export default NavLink
