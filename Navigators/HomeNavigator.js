import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductContainer from "../Screens/Products/ProductContainer";


const Stack = createStackNavigator();

const MyStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ProductContainer}
                options={{
                    headerShown: false,
                    animationEnabled: true
                }}
             />
        </Stack.Navigator>
    )
}

export default function HomeNavigator(){
    return <MyStack /> 
}