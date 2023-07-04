import React from "react";
import { TouchableOpacity, View, Dimensions, StyleSheet, Text} from "react-native";
import ProductCard from "./ProductCard";


var {width} = Dimensions.get('window');

const ProductList = (props)=>{
    const {item} = props;
   
    return(
        <TouchableOpacity style={styles.container}
        onPress={()=>{
            props.navigation.navigate('Product Details',{item:item})
            console.log({item})
        }}
        >
            <View style={{width: width /2, backgroundColor: 'gainsboro' }}>
                <ProductCard
                 {...item} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '50%',

    }
})

export default ProductList;