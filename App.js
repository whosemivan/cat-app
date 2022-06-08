import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Auth from './components/Auth/auth';
import Main from './components/Main/main';


export default function App() {
  const [login, setLogin] = useState('alienba6y');
  const [data, setData] = useState();

  useEffect(() => {
    const getCats = () => {
        axios
            .get(`http://sb-cats.herokuapp.com/api/2/${login}/show`)
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                setData(data);
            })
            .catch((e) => console.log('something went wrong :(', e));
    };
    getCats();
}, []);


  return (
    <View style={styles.container}>
      <Main/>
      <Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04454D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
