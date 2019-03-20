// React
import React, { useState } from 'react'

// Components
import LaunchDetails from './launchDetails'

// Material
import { Button, Card, CardActions, CardContent, Typography, withStyles } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiRocket, mdiEarth } from '@mdi/js'

const styles = {
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	card: {
		marginBottom: '3em',
		width: '100%'
	}
}

function LaunchItem(props) {
	const {
		classes,
		launch: { flight_number, mission_name, launch_date_local, launch_success }
	} = props

	const [showDetails, setShowDetails] = useState(false)

	return (
		<Card className={classes.card} style={{ textAlign: 'left', paddingTop: '1em' }}>
			{showDetails ? (
				<CardContent>
					<LaunchDetails flight_number={flight_number} />
					<CardActions style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
						<Button variant="contained" size="small" onClick={() => setShowDetails(false)}>
							<Typography style={{ display: 'flex', alignItems: 'center' }} variant={'button'}>
								<Icon path={mdiEarth} size={1} color="black" />
								Mission Overview
							</Typography>
						</Button>
					</CardActions>
				</CardContent>
			) : (
				<CardContent>
					<Typography variant={'display1'}>
						Mission Name:
						<span style={{ color: launch_success === true ? 'green' : launch_success === false ? 'red' : 'yellow' }}>
							{` ${mission_name}`}
						</span>
					</Typography>
					<Typography variant={'caption'}>Flight Number: {flight_number}</Typography>
					<Typography variant={'caption'}>Launch Date: {launch_date_local}</Typography>
					<CardActions style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
						<Button variant="contained" size="small" onClick={() => setShowDetails(true)}>
							<Typography style={{ display: 'flex', alignItems: 'center' }} variant={'button'}>
								<Icon path={mdiRocket} size={1} color="black" />
								Launch Details
							</Typography>
						</Button>
					</CardActions>
				</CardContent>
			)}
		</Card>
	)
}

export default withStyles(styles)(LaunchItem)
