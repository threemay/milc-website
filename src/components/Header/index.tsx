import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import NavLink from '../NavLink'

interface IHeaderProps {
	text?: string
	project?: string
}

const useStyles = makeStyles(() => ({
	/* stylelint-disable */
	headerWrap: {
		display: 'flex',
		height: 60,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 40px',
	},
	navlinkWrap: {
		display: 'flex',
		marginBottom: 0,
		'@media (max-width:780px)': {
			// eslint-disable-line no-useless-computed-key
			display: 'none',
		},
	},
	logo: {
		flex: 1,
	},
	liWrap: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userIcon: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))

const TestDropdownBox = () => <Box>test dropdown</Box>

const Header: React.FC<IHeaderProps> = () => {
	const classes = useStyles({})

	return (
		<Box className={classes.headerWrap}>
			<Box className={classes.logo} />
			<ul className={classes.navlinkWrap}>
				<NavLink text='Home' link='#' dropDown={<TestDropdownBox />} />
				<NavLink text='Finding a Tutor' link='/#/tutors' />
				<NavLink text='Account' link='/#/account' />
			</ul>
			<Box className={classes.liWrap}>
				<FontAwesomeIcon icon={faUserCircle} className={classes.userIcon} />
				<FontAwesomeIcon icon={['far', 'user-circle']} className={classes.userIcon} />
			</Box>
		</Box>
	)
}

export default Header
