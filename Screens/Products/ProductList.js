import React from "react";
import { TouchableOpacity, View, Dimensions, StyleSheet} from "react-native";


const ProductList = (props) =>{

    return(
        <TouchableOpacity style={styles.touch} >
            <View style={styles.container}>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window'/ 2),
        backgroundColor: 'grey'
    },
    touch: {
        width: '50%'
    }

})

export default ProductList