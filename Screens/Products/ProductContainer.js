import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


const data = require('../../assets/data/products.json');

const ProductContainer = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(data);
        return ()=>{
            setProducts([])
        }
    }, [])


    return (
        <View style={styles.container}>
            <FlatList 
            horizontal
            data={products}
            renderItem={({item})=><Text>{item.brand}</Text>}
            keyExtractor={item => item.name}
            /> 

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default ProductContainer;