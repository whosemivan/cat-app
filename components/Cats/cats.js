import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

import Cat from './props/cat';


export default function Cats({navigation, data}) {
    const [catsData, setCatsData] = useState(data && [...data]);

    let [fontsLoaded] = useFonts({
        Ubuntu_500Medium,
        Ubuntu_400Regular
    });

    if (!fontsLoaded || !data) {
        return <AppLoading />;
    }

    let searchData = [];
    const findCat = (requiredCatName) => {
        if(!requiredCatName) { return setCatsData([...data]); }
        setCatsData(catsData.filter((cat) => cat.name.toLowerCase().includes(requiredCatName.toLowerCase())));
    }

    const addCatsOnPage = (cat) => {
        searchData.push({id: cat.id, name: cat.name});
        return <Cat navigation={navigation} key={cat.id} id={cat.id} image={cat.img_link} name={cat.name} rate={cat.rate} />;
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TextInput style={styles.searchInput} onChangeText={(value) => findCat(value)} placeholder="Поиск по имени.." placeholderTextColor="#F5F2EB96" />

                <View>
                    {catsData == null ? <Text style={[styles.errorMsg, {fontFamily: 'Ubuntu_500Medium'}]}>Котиков пока нет</Text> : catsData.map(cat => addCatsOnPage(cat))}
                    {/* {catsData.map(cat => addCatsOnPage(cat))} */}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        minHeight: "100%",
        backgroundColor: '#04454D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 320,
        paddingTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 50,
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
    errorMsg: {
        marginTop: 100,
        color: "#F5F2EB",
        textAlign: "center",
        fontSize: 24,
        textAlign: "center",
    },
});