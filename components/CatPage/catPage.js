import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import axios from 'axios';
import { StyleSheet, Text, View, Image } from 'react-native';

const CatPage = ({route, login}) => {
    const [data, setData] = useState();
    useEffect(() => {
        axios
          .get(`http://sb-cats.herokuapp.com/api/2/${login}/show/${route.params.id}`)
          .then((response) => {
            console.log(response.status);
            console.log(response.data);
            setData(response.data.data);
          })
          .catch((e) => console.log('something went wrong :(', e));
    }, [])
    if (!data) {
        return <AppLoading />;
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: data.img_link}} />
                <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{data.name}</Text>
                <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{data.age}</Text>
                <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{data.description}</Text>
            </View>
        </View>
    );
};

export default CatPage;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#04454D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: 280,
        minHeight: 373,
        marginTop: 50,
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "#F5F2EB",
    },
    image: {
        width: 280,
        height: 200,
    },
    title: {
        marginTop: 20,
        color: "#04454D",
        fontSize: 24,
        textAlign: "center",
    },
});