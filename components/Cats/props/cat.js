import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


export default function Cat(props) {
    const {image, name, rate} = props;

    const createRate = (rateCount) => {
        let rateArray = {line1: [], line2: []};
        for(let i = 1; i <= 10; ++i) {
            if (i <= rateCount) {
                if (i <= 5) {
                    rateArray.line1.push(<Image key={i} style={styles.rateStar} source={require(`../../../assets/star-solid.svg`)} />);
                } else {
                    rateArray.line2.push(<Image key={i} style={styles.rateStar} source={require(`../../../assets/star-solid.svg`)} />);
                }
            } else {
                if (i <= 5) {
                    rateArray.line1.push(<Image key={i} style={styles.rateStar} source={require(`../../../assets/star-regular.svg`)} />);
                } else {
                    rateArray.line2.push(<Image key={i} style={styles.rateStar} source={require(`../../../assets/star-regular.svg`)} />);
                }
            }
        }

        return (
            <View style={styles.rateContainer}>
                <View style={styles.rateLine}>{rateArray.line1}</View>
                <View style={styles.rateLine}>{rateArray.line2}</View>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <Text style={[styles.title, {fontFamily: 'Ubuntu_500Medium'}]}>{name}</Text>
            {createRate(rate)}
            <Text style={styles.link}>узнать больше</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
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
    rateContainer: {
        margin: "auto",
        marginTop: 20,
    },
    rateLine: {
        marginBottom: 10,
        flexDirection: "row",
    },
    rateStar: {
        width: 23,
        height: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    link: {
        height: 25,
        marginTop: "auto",
        color: "#04454D",
        backgroundColor: "#04BA71",
        fontSize: 18,
        textAlign: "center",
    },
});