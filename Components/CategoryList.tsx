import * as React from 'react';
import { Image, Text, View,StyleSheet } from 'react-native';
import Snowflake from "../assets/images/snowflakes.png";
export interface  CategoryListProps {
}

export default function CategoryList (props:  CategoryListProps) {
  return (
    <>
    <View style={style.container}>
        <Text style={style.title}>Hình băng tuyết này</Text>
        <Image style={style.categoryImage} source={Snowflake}></Image>
    </View>
    </>
  );
}
const style = StyleSheet.create({
    categoryImage: {
        height:200,
        width:200
    },
    container: {
        alignItems: 'center',
        padding:4,
        border: 1,
        borderRadius:4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width:10,height:10}
    },
    title: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})