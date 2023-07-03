import { Badge, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";


const CategoryFilter = (props) =>{
    
    return(
        <NativeBaseProvider>
            <ScrollView 
            bounces
            horizontal
            style={{backgroundColor:"#f2f2f2"}}
            >
                <VStack style={{margin: 0, padding: 0, borderRadius: 0}}>
                    <TouchableOpacity 
                    key={1}
                    //onPress={() => props.setCategory("All")}
                    >
                        <Badge
                         style={[styles.center, {margin: 5}]}
                        >
                            <Text style={{color: 'white'}}>
                                name
                            </Text>
                        </Badge>
                    </TouchableOpacity>
                </VStack>
            </ScrollView>
        </NativeBaseProvider>
        
    )
}

const styles = StyleSheet.create({
    center:{
         justifyContent:"center",
         alignItems:'center'
    }
})

export default CategoryFilter;