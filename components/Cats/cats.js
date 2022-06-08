import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

import Cat from './props/cat';


export default function Cats({navigation, data}) {
    let [fontsLoaded] = useFonts({
        Ubuntu_500Medium,
        Ubuntu_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const findCat = () => {
        console.log("Поиск кошки по имени");
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} onChangeText={findCat} placeholder="Поиск по имени.." placeholderTextColor="#F5F2EB96" />

            <View>
                {data == null ? <Text>Котиков пока нет</Text> : data.data.map(cat => <Cat navigation={navigation} key={cat.id} id={cat.id} image={cat.img_link} name={cat.name} rate={cat.rate} />)}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
        backgroundColor: '#04454D',
    },
    searchInput: {
        width: 170,
        marginLeft: "auto",
        marginRight: "auto",
        color: "#F5F2EB",
        fontSize: 18,
        textAlign: "center",
        borderBottomColor: '#F5F2EB96',
        borderBottomWidth: 2,
    },
});