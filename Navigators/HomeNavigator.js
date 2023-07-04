import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";


const Stack = createStackNavigator();

const MyStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Acceuil"
                component={ProductContainer}
                options={{
                    headerShown: false,
                    animationEnabled: true
                }}
            />
            <Stack.Screen 
            name="Product Details"
            component={SingleProduct}
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