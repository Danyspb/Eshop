import { Container, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";



const SingleProduct = (props) =>{


    const [item,setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);

    return(
        <NativeBaseProvider>
            <Container>
                <ScrollView style={{marginBottom: 80, padding: 5}}>
                    <View>
                        <Image 
                            source={{
                                uri : item.image ? item.image
                                : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'

                            }}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View>
                </ScrollView>
            </Container>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        position: "relative",
        height: '100%' 
    },
    imageContainer:{
        backgroundColor: 'yellow',
        padding: 0,
        margin: 0,
    },
    image:{
        width: '100%',
        height: 250
    }
})

export default SingleProduct;