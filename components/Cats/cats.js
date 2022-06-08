import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

import Cat from './props/cat';


export default function Cats() {
    let [fontsLoaded] = useFonts({
        Ubuntu_500Medium,
        Ubuntu_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const cats = [
        {
            "name": "Лара",
            "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
            "age": 8,
            "rate": 7,
            "favourite": false,
            "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
            "id": 1
        }
    ]

    const findCat = () => {
        console.log("Поиск кошки по имени");
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} onChangeText={findCat} placeholder="Поиск по имени.." placeholderTextColor="#F5F2EB96" />

            <View>
                {cats.map(cat => <Cat key={cat.id} image={cat.img_link} name={cat.name} rate={cat.rate} /> )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#04454D',
    },
    searchInput: {
        width: 170,
        marginLeft: "auto",
        marginRight: "auto",
        color: "#F5F2EB",
        // fontFamily: NunitoRegular,
        fontSize: 18,
        textAlign: "center",
        borderBottomColor: '#F5F2EB96',
        borderBottomWidth: 2,
    },
});