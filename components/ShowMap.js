import React, { useState, useEffect } from "react"
import { PROVIDER_GOOGLE } from "react-native-maps"
import MapView from "react-native-maps"
import { Marker } from "react-native-maps"
import { View, StyleSheet } from "react-native"
import Geocoder from "react-native-geocoding"

function ShowMap({ route }) {
	const { address } = route.params
	const [location, setLocation] = useState({})
	// let location = {}

	useEffect(() => {
		Geocoder.init("AIzaSyAO3mj2AZudKvECBf_lv-9IvWynhRj82kI")
		Geocoder.from(address)
			.then(json => {
				let loc = json.results[0].geometry.location

				setLocation(loc)
			})
			.catch(error => console.warn(error))
	}, [])

	return (
		<View>
			<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				initialRegion={{
					latitude: location.lat,
					longitude: location.lng
				}}
			>
				<Marker coordinate={{ latitude: location.lat, longitude: location.lng }}></Marker>
			</MapView>
		</View>
	)
}
const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%"
	}
})
export default ShowMap
