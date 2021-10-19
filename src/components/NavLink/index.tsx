/* eslint-disable react/require-default-props */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface INavLinkProps {
	text: string
	link: string
	dropDown?: null | React.ReactNode
}

const useStyles = makeStyles(() => ({
	// stylelint-disable selector-type-no-unknown
	navlinkwrap: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: 150,
		height: 60,

		'&:hover $dropdown': {
			display: 'block',
		},
	},

	navlink: {
		display: 'flex',
		alignItems: 'center',
		color: '#77838F',
		textDecoration: 'none',

		'&:hover': {
			color: '#090761',
			cursor: 'pointer',
		},
	},

	navlinktext: { marginRight: 8 },

	dropdown: {
		position: 'absolute',
		top: 60,
		left: -12,
		zIndex: 9,
		display: 'none',
		padding: 12,
		backgroundColor: 'white',
		borderRadius: 6,
		boxShadow: '0 2px 10px 0 rgba(0,0,0,0.12)',
	},
}))

const NavLink: React.FC<INavLinkProps> = ({ text, link = '#', dropDown }) => {
	const classes = useStyles({})
	return (
		<li className={classes.navlinkwrap}>
			<a href={link} className={classes.navlink}>
				<Typography className={classes.navlinktext}>{text}</Typography>
				<FontAwesomeIcon icon={faChevronDown} />
			</a>
			{dropDown ? <Box className={classes.dropdown}>{dropDown}</Box> : null}
		</li>
	)
}

export default NavLink
