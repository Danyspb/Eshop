import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import ProductList from './ProductList';

const data = require('../../assets/data/products.json');
const ProductContainer = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        setProducts(data);

        return ()=>{
            setProducts([])
        }
    }, [])
    return(
        <View>
            <Text>Product container</Text>
            <View style={styles.container}>
                <FlatList 
                horizontal
                data={products}
                renderItem={({item})=> <ProductList key={item} />}
                keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    }
})
export default ProductContainer
