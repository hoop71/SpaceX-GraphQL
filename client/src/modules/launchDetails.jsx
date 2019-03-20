import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`

function LaunchDetails(props) {
	const { flight_number } = props
	console.log(props)
	return (
		<Query query={LAUNCH_QUERY} variables={{ flight_number }}>
			{({ loading, error, data }) => {
				if (loading) return <h4>Getting your data from space...</h4>
				if (error) console.log(error)
				const {
					mission_name,
					flight_number,
					launch_year,
					launch_success,
					rocket: { rocket_id, rocket_name, rocket_type }
				} = data.launch
				return (
					<div>
						<h1>
							<span>Mission:</span> {mission_name}
						</h1>
						<h4>Launch Details</h4>
						<ul>
							<li>Flight Number: {flight_number}</li>
							<li>Launch Year: {launch_year}</li>
							<li>
								Launch Successful:
								<span style={{ color: launch_success ? 'green' : 'red' }}>{launch_success ? ' Yes' : ' No'}</span>
							</li>
						</ul>

						<h4>Rocket Details</h4>
						<ul>
							<li>Rocket ID: {rocket_id}</li>
							<li>Rocket Name: {rocket_name}</li>
							<li>Rocket Type: {rocket_type}</li>
						</ul>
						<hr />
					</div>
				)
			}}
		</Query>
	)
}

export default LaunchDetails
