import React from "react"
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

function Details({ route, navigation }) {
	const { name, tags, rating, phone, address, description, id } = route.params
	let stars = []
	for (let i = 0; i < rating; i++) {
		stars.push(<Ionicons key={i} name={"ios-star"} color={"#554AF0"} size={20} />)
	}
	const handleEdit = () => {
		navigation.navigate("Edit", { name, tags, phone, description, id })
	}

	const handleShowMap = () => {
		navigation.navigate("Maps", { address })
	}
	return (
		<View style={styles.container}>
			<View style={{ width: "100%" }}>
				<Image source={require("../assets/restaurant.jpg")} style={{ width: "100%" }}></Image>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: 20 }}>
				<View>
					<Text style={styles.restaurantName}>{name}</Text>
				</View>
				<View>
					<Button title='Edit' onPress={handleEdit}></Button>
				</View>
			</View>
			<View style={styles.stars}>
				<View style={{ flexDirection: "row" }}>{stars}</View>
			</View>
			<View>
				<Text style={styles.tags}>Tags: </Text>
				<Text style={styles.tag}>{tags.map(tag => `#${tag}, `)}</Text>
			</View>

			<View>
				<Text style={styles.tags}>Address: </Text>
				<Text style={styles.tag}>{address}</Text>
				<Text style={styles.tag}>Phone # {phone}</Text>

				<View style={styles.showMapButton}>
					<Pressable
						style={({ pressed }) => {
							return pressed && styles.pressedItem
						}}
						onPress={handleShowMap}
					>
						<Text style={{ color: "white" }}>Show Map</Text>
					</Pressable>
				</View>
			</View>

			<View>
				<Text style={styles.tags}>Description: </Text>
				<Text style={styles.tag}>{description}</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		width: "100%"
	},
	restaurantName: {
		// textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 5,
		marginLeft: 5
		// textAlign: "center",
	},
	stars: {
		marginTop: 5,
		marginLeft: 5
	},
	tags: {
		fontSize: 23,
		fontWeight: "bold",
		marginTop: 10,
		marginLeft: 5
	},
	tag: {
		fontSize: 17,
		marginTop: 5,
		marginLeft: 5
	},
	showMapButton: {
		padding: 10,
		backgroundColor: "#554AF0",
		width: "25%",
		marginTop: 5,
		marginLeft: 5,
		borderRadius: 10
	},
	pressedItem: {
		opacity: 0.5
	}
})
export default Details
