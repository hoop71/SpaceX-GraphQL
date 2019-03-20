import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './launchItem'
import logo from '../assets/spacex.svg'

import { Grid, withStyles } from '@material-ui/core'

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`
const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		margin: '3em'
	}
}

function Launches(props) {
	const { classes } = props
	return (
		<div className={classes.root}>
			<img style={{ marginBottom: '3em', width: '20em' }} src={logo} alt="space x logo" />
			<Grid container spacing={24}>
				<Query query={LAUNCHES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Getting your data from space...</h4>
						if (error) console.log(error)
						return data.launches.map(launch => (
							<Grid item xs={6} key={launch.flight_number}>
								<LaunchItem launch={launch} />
							</Grid>
						))
					}}
				</Query>
			</Grid>
		</div>
	)
}

export default withStyles(styles)(Launches)
