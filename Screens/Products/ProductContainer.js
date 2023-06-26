import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductList from "./ProductList";


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
                    numColumns={2}
                    data={products}
                    renderItem={({item})=>
                        <ProductList key={item.id} item={item}
                        />}
                    keyExtractor={item => item.name}
                    /> 
            </View>
        
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'gainsboro'
    }
})

export default ProductContainer;