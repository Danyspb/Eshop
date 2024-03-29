import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5"
import { Ionicons } from '@expo/vector-icons'


// Stacks
import HomeNavigator from "./HomeNavigator";



const Tab = createBottomTabNavigator();

const Main =()=>{

    return(
        <Tab.Navigator 
        initialRouteName="Acceuil"
        screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        }}>

            <Tab.Screen 
            name="Home"
            component={HomeNavigator}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons 
                        name="home"
                        size={30}
                        color={color}
                        />
                    )
                
                }}
            /> 
            <Tab.Screen 
            name="Cart"
            component={HomeNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <Ionicons 
                    name="cart"
                    size={30}
                    color={color}
                    />
                )
           
            }}    
            /> 
            <Tab.Screen 
            name="Admin"
            component={HomeNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <Ionicons 
                    name="cog"
                    size={30}
                    color={color}
                    />
                )
            }}    
            /> 
            <Tab.Screen 
            name="User"
            component={HomeNavigator}
            options={{
                tabBarIcon:({color})=>(
                    <Ionicons 
                    name="person"
                    size={30}
                    color={color}
                    />
                )
            }}    
            /> 
        </Tab.Navigator>
    )
}

export default Main;