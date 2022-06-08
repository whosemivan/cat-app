import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './components/Auth/auth';
import Main from './components/Main/main';
import Cats from './components/Cats/cats';
import AddCat from './components/AddCat/addCat';

const Stack = createNativeStackNavigator();

export default function App() {
  const [login, setLogin] = useState('');
  const [data, setData] = useState();


  const onSubmitBtnClick = () => {
    axios
      .get(`http://sb-cats.herokuapp.com/api/2/${login}/show`)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => console.log('something went wrong :(', e));
  };

  console.log(login);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" options={{ title: 'Авторизация' }} >
          {props => <Auth {...props} setLogin={setLogin} onSubmitBtnClick={onSubmitBtnClick} />}
        </Stack.Screen>
        <Stack.Screen name="Main" options={{ title: 'Главная' }}>
          {props => <Main {...props} login={login} />}
        </Stack.Screen>
        <Stack.Screen name="Cats" options={{ title: 'Каты =)' }} >
          {props => <Cats {...props} data={data} />}
        </Stack.Screen>
        <Stack.Screen name="AddCat" options={{ title: 'Добавить каата!' }} >
          {props => <AddCat {...props} login={login} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
