import React from 'react'

interface ITestProps {
	text: string
	project: string
}

const Test: React.FC<ITestProps> = ({ text, project }) => (
	<div>
		This is the {text}, {project}!!!
	</div>
)

export default Test
