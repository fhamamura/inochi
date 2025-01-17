import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons";
import HomeView from "../views/home";
import LogsView from "../views/logs";
import CronoView from "../views/crono";
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

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
                name="Home" 
                component={HomeView} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
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
                    tabBarLabel: "Logs",
                }}
            />
            <Tab.Screen 
                name="Crono" 
                component={CronoView} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="clock" color={color} size={size} />
                    ),
                    tabBarLabel: "Cronômetro",
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
