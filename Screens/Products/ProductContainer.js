import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

const data = require('../../assets/data/products.json');
const ProductContainer = ()=>{
    
    const [products, setProducts] = useState([]);
    return(
        <View>
            <Text>Product container</Text>
        </View>
    )
}

export default ProductContainer
