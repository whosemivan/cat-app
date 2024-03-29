import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';

const Auth = ({ navigation, setLogin }) => {
    let [fontsLoaded] = useFonts({
        Ubuntu_500Medium,
        Ubuntu_400Regular
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
       <View style={styles.mainContainer}>
           <View style={styles.form}>
                <Text style={[styles.formTitle, {fontFamily: 'Ubuntu_500Medium'}]}>Авторизация</Text>
                <TextInput style={styles.formInput} placeholder="Ваш логин.." defaultValue="Login" onChangeText={(value) => {
                    setLogin(value);
                }}/>
           </View>

           <TouchableHighlight style={styles.btn} onPress={() => {
               navigation.navigate('Main')
            }}>
                <Text style={[styles.btnText, {fontFamily: 'Ubuntu_500Medium'}]}>Погнали</Text>
           </TouchableHighlight>
       </View>
    );
};

export default Auth;

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
    },
    iconBtn: {
        width: 22,
        heigth: 16
    }
  });
