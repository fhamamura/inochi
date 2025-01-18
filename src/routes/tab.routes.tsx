import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons";
import HomeView from "../views/home";
import LogsView from "../views/logs";
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Medications from "../views/medications";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#888',
            }}
        >
            <Tab.Screen
                name="Medications"
                component={Medications}
                options={{
                    tabBarItemStyle: { display: 'none' },
                }}
            /> 
            <Tab.Screen 
                name="Home" 
                component={HomeView} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                    headerTitle: "Inochi",
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen 
                name="Logs" 
                component={LogsView} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="file-text" color={color} size={size} />
                    ),
                    headerTitle: "Logs",
                    tabBarLabel: "Logs",
                }}
            />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#333',
    },
    });

export default TabRoutes;
