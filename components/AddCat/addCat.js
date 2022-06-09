import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

const AddCat = ({navigation, login, getCatsData}) => {

    const [catData, setCatData] = useState({name: "Имя кошки", img_link: "https://miro.medium.com/max/1200/1*BomiWkQi5XB5A4KpQziJpw.jpeg", age: 5, rate: 10, description: "Описание котейки", id: Date.now()});

    const postCat = (catData) => {
        const headers = { 'header-name': 'value' };
        const config = { headers, };
        axios
            .post(
                `http://sb-cats.herokuapp.com/api/2/${login}/add`,
                catData,
                config,
            )
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                getCatsData();
            })
            .catch((e) => console.log('something went wrong :(', e));
    };


    return (
        <View style={styles.mainContainer}>
            <View style={styles.form}>
                <Text style={[styles.formTitle, {fontFamily: 'Ubuntu_500Medium'}]}>Авторизация</Text>
                <TextInput style={styles.formInput} placeholder="Имя котика)" onChangeText={(value) => setCatData({...catData, name: value})} />
                <TextInput style={styles.formInput} placeholder="Фото" onChangeText={(value) => setCatData({...catData, img_link: value})} />
                <TextInput style={styles.formInput} placeholder="Возраст" onChangeText={(value) => setCatData({...catData, age: value})} />
                <TextInput style={styles.formInput} placeholder="Оценка" onChangeText={(value) => setCatData({...catData, rate: value})} />
                <TextInput style={[styles.formInput, {marginBottom: 0}]} placeholder="Описание" onChangeText={(value) => setCatData({...catData, description: value})} />
            </View>

            <TouchableHighlight style={styles.btn} onPress={() => {navigation.navigate('Main'); postCat(catData)}}>
                <Text style={[styles.btnText, {fontFamily: 'Ubuntu_500Medium'}]}>Отправить</Text>
            </TouchableHighlight>
        </View>
    );
};

export default AddCat;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#04454D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        paddingTop: 35,
        paddingBottom: 35,
        width: 280,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 50,
        backgroundColor: '#F5F2EB',
    }, 
    formTitle: {
        fontWeight: "500",
        fontSize: 24,
        color: '#04454D', 
        lineHeight: 28,
        marginBottom: 20
    },
    formInput: {
        marginBottom: 15,
        borderBottomColor: '#04454D',
        borderBottomWidth: 2,
        width: 130,
        textAlign: 'center',
        fontSize: 18
    },
    btn: {
        backgroundColor: '#04BA71', 
        width: 280,
        height: 45,
        borderRadius: 16,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#04454D',
        fontSize: 18,
    }
  });