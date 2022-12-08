import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Search from "./Search"
import Details from "./Details"
import ShowMap from "./ShowMap"
const Stack = createNativeStackNavigator()

export default function SearchNavigation() {
	return (
		<Stack.Navigator
			initialRouteName='Search'
		>
			<Stack.Screen
				name='Search'
				component={Search}
				options={{
					headerShown: false
				}}
			></Stack.Screen>
			<Stack.Screen name='Details' component={Details}></Stack.Screen>
			<Stack.Screen name='Maps' component={ShowMap}></Stack.Screen>

		</Stack.Navigator>
	)
}
