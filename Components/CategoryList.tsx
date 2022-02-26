import * as React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Snowflake from "../assets/images/snowflakes.png";
export interface CategoryListProps {
    category: {
        id: number,
        name: string
    }
}

export default function CategoryList(props: CategoryListProps) {
    const { id, name } = props.category;
    const handleTouch = () =>{
        Alert.alert("Cảnh báo","Bạn là 1 con bóng long xiên xiên vô loz con đỉ mẻ m",[
            {
                text: 'Huỷ',
                style: 'cancel'
            },
        ])
    }
    return (
        <>
            <TouchableOpacity activeOpacity={0.5} onPress={handleTouch}>
                <View style={style.container}>
                    <Text style={style.title}>{name}</Text>
                    <Image style={style.categoryImage} source={Snowflake}></Image>
                </View>
            </TouchableOpacity>

        </>
    );
}
const style = StyleSheet.create({
    categoryImage: {
        height: 200,
        width: 200
    },
    container: {
        alignItems: 'center',
        padding: 4,
        border: 1,
        borderRadius: 4,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 10, height: 10 }
    },
    title: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})