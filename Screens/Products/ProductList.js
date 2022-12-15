import React from "react";
import { TouchableOpacity, View, Dimensions, StyleSheet} from "react-native";
import ProductCard from "./ProductCard";

var {width} = Dimensions.get('screen');

const ProductList = (props) =>{
    const {item} = props;
    return(
        <TouchableOpacity style={styles.touch} >
            <View style={{width: width /2, backgroundColor: 'gainsboro'}}>

                <ProductCard />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        

    },
    touch: {
        width: '50%',
        
    }

})

export default ProductList