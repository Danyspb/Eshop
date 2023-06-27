import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductList from "./ProductList";
import { VStack, Input, Icon, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SearchProductFilter from "./SearchedProduct";

const data = require('../../assets/data/products.json');

const ProductContainer = () =>{
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [focus, setFocus] = useState()


    useEffect(()=>{
        setProducts(data);
        setSearchProduct(data);
        setFocus(false)
        return ()=>{
            setProducts([])
            setSearchProduct([])
            setFocus()
        }
    }, [])


    const searchProd =(text) =>{
        setSearchProduct(
            products.filter((i) => i.name.toLowerCase().include(text.toLowerCase()))
        )       
    }

    const openList = () =>{
        setFocus(true);
    }

    const onBlur = ()=>{
        setFocus(false)

    }


    return (
        <NativeBaseProvider>
            <VStack>
                <Input 
                onFocus={openList}
                onChangeText={(text)=> searchProd(text)}
                placeholder="Search" 
                width="100%" borderRadius="4" 
                py="3" px="1" fontSize="14" 
                InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
            </VStack>
            {focus == true ? (
                <SearchProductFilter 
                    searchProd={searchProduct}
                /> 
             ):(
                <View style={styles.container}>
                <FlatList 
                    numColumns={2}
                    data={products}
                    renderItem={({item})=>
                    <ProductList key={item.id} item={item}
                />}
                    keyExtractor={item => item.name}/> 
                </View>
             )
            }
            
    
        </NativeBaseProvider>
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