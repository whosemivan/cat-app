import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

const Main = () => {
    let [fontsLoaded] = useFonts({
        Ubuntu_500Medium,
        Ubuntu_400Regular
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      }
    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.image} source={require(`../../assets/cat.jpg`)}/>
            <TouchableHighlight style={styles.btn}>
                <Text style={[styles.btnText, {fontFamily: 'Ubuntu_500Medium'}]}>Все котики</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn}>
                <Text style={[styles.btnText, {fontFamily: 'Ubuntu_500Medium'}]}>Добавить котика</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.exitBtn}>
                <Text style={[styles.exitBtnText, {fontFamily: 'Ubuntu_500Medium'}]}>Выйти</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Main;


const styles = StyleSheet.create({
    image: {
        borderRadius: '50%',
        width: 123, 
        height: 123,
        marginBottom: 100
    }, 
    btn: {
        backgroundColor: '#04B36C',
        borderRadius: 18,
        width: 280,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }, 
    btnText: {
        color: '#EBE9E2',
        textTransform: 'uppercase',
        fontSize: 20,
        lineHeight: 23
    }, 
    exitBtn: {
        width: 280,
        height: 50,
        borderTopColor: '#04BA71',
        borderTopWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    exitBtnText: {
        color: '#04BA71',
        fontSize: 24,
        lineHeight: 28,
        textTransform: 'uppercase'
    }
  });