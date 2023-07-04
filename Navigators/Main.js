import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"
const Tab = createBottomTabNavigator();

const Main =()=>{

    return(
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#e91e63'
        }}>

            <Tab.Screen 
            name="Home"
            component={''}
            options={{
                tabBarIcon:({color}) =>{
                    <Icon 
                    name="home"
                    size={25}
                    />
                }
            }}
            /> 
        </Tab.Navigator>
    )
}