
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";


const Banner = ()=>{

    const [bannerData, SetBannerData] = useState([]);

    useEffect(()=>{
        SetBannerData([
            "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
            "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
            "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg"
        ])

        return() =>{
            SetBannerData([])
        }
    },[])

    return(
       <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                    style={{}}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={2}
                    >
                        {
                            bannerData.map((item)=>{
                                return (
                                    <Image 
                                        key={item}
                                        style={styles.imageBanner}
                                        resizeMode="contain"
                                        source={{uri: item}}
                                    /> 
                                );
                            })
                        }
                    </Swiper>
                </View>
        </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0.5,
        backgroundColor: 'gainsboro',

    },
    swiper:{
        width: 300,
        height: 200,
        alignItems: "center",
        marginTop: 10,
       
    },
    imageBanner:{
        height: 150,
        width: 250,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner;