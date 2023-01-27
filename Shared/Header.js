import React from "react";
import { StyleSheet, Image, View } from "react-native";


const Header = () =>{

    return(
        <View style={styles.header}>
            <Image 
                source={require('../assets/splash.png')}
                resizeMode="contain"
                style={{height: 50}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: 100,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: "center",
        padding: 20,

    }
})

export default Header;