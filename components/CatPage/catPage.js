import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const CatPage = ({navigation, route, login}) => {
    const [data, setData] = useState();
    const getCatsData = () => {
        axios
        .get(`http://sb-cats.herokuapp.com/api/2/${login}/show/${route.params.id}`)
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            setData(response.data.data);
        })
        .catch((e) => console.log('something went wrong :(', e));
    }
    useEffect(() => {getCatsData()}, []);
    if (!data) {
        return <AppLoading />;
    }

    const dellCat = () => {
        axios
        .delete(`http://sb-cats.herokuapp.com/api/2/${login}/delete/${route.params.id}`)
        .then((response) => {
            console.log(response.status);
            getCatsData();
        })
        .catch((e) => console.log('something went wrong!', e));
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: data.img_link}} />
                <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{data.name}</Text>
                <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{data.age}</Text>
                <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{data.description}</Text>
                <View style={styles.catControll}>
                    <TouchableHighlight style={styles.btn} onPress={() => {navigation.navigate('Cats'); dellCat()}}>
                        <Image style={styles.btnImg} source={require(`../../assets/trash-can-solid.svg`)} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btn}>
                        <Image style={styles.btnImg} source={require(`../../assets/pencil.svg`)} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

export default CatPage;

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        paddingBottom: 50,
        minHeight: "100%",
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
    catControll: {
        height: 50,
        marginTop: 20,
        flexDirection: "row",
    },
    btn: {
        flex: 1,
        backgroundColor: '#04BA71',
    },
    btnImg: {
        width: 25,
        height: 25,
        margin: "auto",
    }
});