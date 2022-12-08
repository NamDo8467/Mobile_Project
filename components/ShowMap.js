import React from "react"
import { PROVIDER_GOOGLE } from "react-native-maps"
import MapView from "react-native-maps"
import { View, StyleSheet } from "react-native"
import Geocoder from 'react-native-geocoding';

function ShowMap() {
	return (
		<View>
			<MapView style={styles.map} provider={PROVIDER_GOOGLE} />
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
