import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

const data = require('../../assets/data/products.json');
export class ProductContainer extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default ProductContainer
