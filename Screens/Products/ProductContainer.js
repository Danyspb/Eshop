import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, StyleSheet, View, Text } from "react-native";
import ProductList from "./ProductList";
import { VStack, Input, Icon, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import SearchProductFilter from "./SearchedProduct";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";

const data = require('../../assets/data/products.json');
const dataCategorie = require('../../assets/data/categories.json')



const ProductContainer = (props) =>{
    const [products, setProducts] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState();


    useEffect(()=>{
        setProducts(data);
        setSearchProduct(data);
        setFocus(false);
        setCategories(dataCategorie);
        setActive(-1)
        setInitialState(data)



        return ()=>{
            setProducts([])
            setSearchProduct([])
            setFocus();
            setCategories([]);
            setActive();
            setInitialState();
        }
    }, [])


    const produitRecherhche =(text) =>{
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
        <NativeBaseProvider >
            <VStack >
                <Input 
                    onFocus={openList}
                    onChangeText={(text)=> produitRecherhche(text)}
                    placeholder="Search" 
                    width="100%"
                    borderRadius="4" 
                    py="3" px="1" fontSize="14" 
                    InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} 
                    
                />
                { focus == true ?(
                        <Icon InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="close" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="close" />} />} /> 
                    ): null
                }

            </VStack>

            
            {focus == true ? (
                <SearchProductFilter 
                    searchProduct={produitRecherhche}
                /> 
             ):(
                <View style={styles.container}>  
                {/* <View>
                    <Banner /> 
                </View> */}
                {/* <View>
                    <CategoryFilter /> 
                </View> */}
                <FlatList 
                    numColumns={2}
                    data={products}
                    renderItem={({item})=>
                    <ProductList
                    navigation={props.navigation}
                     key={item.id} 
                     item={item}
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