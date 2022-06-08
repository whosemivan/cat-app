import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

const AddCat = ({login}) => {
    const [catData, setCatData] = useState({});


    // { 
    //     "name": "Лара", 
    //     "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg", 
    //     "age": 8, 
    //     "rate": 7, 
    //     "favourite": false, 
    //     "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.", 
    //     "id": 1 
    // }

    useEffect(() => {
        const postCat = () => {
            const data = {
                title: catData.name,
                img_link: catData.img,
                age: catData.age,
                rate: catData.rate,
                description: catData.description
            };
            const headers = { 'header-name': 'value' };
            const config = { headers, };
            axios
                .post(
                    `http://sb-cats.herokuapp.com/api/2/${login}/add`,
                    data,
                    config,
                )
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data);
                })
                .catch((e) => console.log('something went wrong :(', e));
        };
        postTodo();
    }, []);

    return (
        <View style={styles.mainContainer}>
        <View style={styles.form}>
            <Text style={[styles.formTitle, {fontFamily: 'Ubuntu_500Medium'}]}>Авторизация</Text>
             <TextInput style={styles.formInput} placeholder="Имя котика)"/>
             <TextInput style={styles.formInput} placeholder="Фото"/>
             <TextInput style={styles.formInput} placeholder="Возраст"/>
             <TextInput style={styles.formInput} placeholder="Оценка"/>
             <TextInput style={styles.formInput} placeholder="Описание"/>
        </View>

        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('Main')}>
             <Image style={styles.iconBtn} source={require('../../assets/auth-icon.png')} />
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
        backgroundColor: '#F5F2EB',
        width: 280,
        height: 155,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 50
    }, 
    formTitle: {
        fontWeight: "500",
        fontSize: 24,
        color: '#04454D', 
        lineHeight: 28,
        marginBottom: 20
    },
    formInput: {
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
    iconBtn: {
        width: 22,
        heigth: 16
    }
  });