import { Button, Container, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";




const SingleProduct = (props) =>{


    const [item,setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);

    return(
        <NativeBaseProvider >
            <Container >
                <ScrollView style={{marginBottom: 80, padding: 5}}>
                    <View >
                        <Image 
                            source={{
                                uri : item.image ? item.image
                                : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'

                            }}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text  style={styles.contentHeader}>
                        {item.name}
                        </Text>
                        <Text style={styles.contentText}>
                            {item.brand}
                        </Text>  
                        <View style={styles.bottomContainer}>
                            <Text style={styles.price}>
                                {item.price} $
                            </Text>  
                        </View>  
                        <View style={styles.button}>
                            <Button  title="Add" >
                                <Text style={{color: 'white', fontWeight: "bold"}}>Add</Text>
                            </Button>
                        </View>
                    </View>
        
                </ScrollView>
            </Container>
        </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
       display: 'flex',
       alignItems: "center",
        height: '100%', 

    },
    imageContainer:{
        margin: 50,
        justifyContent: "center",
        backgroundColor: 'red'
        
    },
    image:{
        width: 250,
        height: 250,
        marginLeft: '20%',
        
    },
    contentHeader:{
        fontWeight: "bold",
        marginBottom: 20
    },
    contentText:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20
    },
    bottomContainer:{
        right: 80,
        top: 7,
        textAlign: "center",
    
    },
    price:{
        fontSize: 40,
        textAlign: "center",
        marginTop: 100,
        color: 'red',
        fontWeight: "bold"
    },
    button:{
        marginLeft: 200,
        width: 70,
        height: 40,
        marginTop: -38,
        right: -18

    }
})

export default SingleProduct;