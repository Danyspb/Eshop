import { NativeBaseProvider, Box, Text, Pressable, HStack, Avatar, VStack, Container } from 'native-base';
import React from "react";
import {  StyleSheet, View } from "react-native";

const SearchProductFilter = (props) =>{
    const {searchProduct} = props;
    return(
        <View>
            <NativeBaseProvider>
                <Container>
                    {
                        searchProduct.lenght > 0 ? (
                            searchProduct.map((item)=>(
                                <Box>
                                    <Pressable>
                                        <Box pl="4" pr="5" py="2">
                                            <HStack alignItems="center" space={3}>
                                              <Avatar size="48px" source={{ uri: item.image}} />
                                                <VStack>
                                                 <Text color="coolGray.800" _dark={{color: 'warmGray.50'}} bold>
                                                    {item.name}
                                                 </Text>
                                                <Text color="coolGray.600" _dark={{color: 'warmGray.200'}}>
                                                    {item.description}
                                                </Text>
                                                </VStack>
                                            </HStack>
                                            </Box>
                                        </Pressable>
                                        </Box>
                            ))
                        ):(
                            <View style={styles.center}>
                                <Text style={{alignSelf: 'center', }}>
                                    No Product Found!
                                </Text>
                            </View>
                        )
                    }
                </Container>
            </NativeBaseProvider>
        </View>
        
    )
}

const styles = StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems: 'center'
    }
})

export default SearchProductFilter;