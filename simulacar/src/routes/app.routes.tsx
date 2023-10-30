import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/Login"
import { PersonData } from "../screens/PersonData"
import { VehicleData } from "../screens/VehicleData"
import { FinalResult } from "../screens/FinalResult"

export function AppRoutes() {

    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
            <Screen name="PersonData" component={PersonData} />
            <Screen name="VehicleData" component={VehicleData} />
            <Screen name="FinalResult" component={FinalResult} />
        </Navigator>
    )
}