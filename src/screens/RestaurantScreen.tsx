import React from 'react';
import { View, StyleSheet } from 'react-native';
import RestaurantCard from '../components/cards/RestaurantCard';

const restaurants = [
    {
        title: "Krogs Fiskerestaurant",
        content: "Friske lokale fisk og skaldyr i et hus fra det 18. århundrede med en elegant spisestue med højt til loftet.",
        image: 'https://lh3.googleusercontent.com/p/AF1QipP1PIsqoOVxQw4kIT_uA4kZlY9PGJ_kDHOtOlCX=s1360-w1360-h1020',
        iconName: 'pin',
        iconLabel: 'Gammel Strand 38, 1202 København',
    },
    {
        title: "Kødbyens Fiskebar",
        content: "Cool industrial-style restaurant in the former meat market serving simple, fresh seafood dishes.",
        image: 'https://lh3.googleusercontent.com/p/AF1QipNLq-LtAiWjZkGkGtEXqWH2plehpipnB1S4id0=s680-w680-h510',
        iconName: 'pin',
        iconLabel: 'Flæsketorvet 100, 1711 København',
    },
    {
        title: "Restaurant Hummer",
        content: "Restaurant Hummer in Copenhagen’s picturesque Nyhavn has undertaken the task to redefine the way we enjoy lobster.",
        image: 'https://gdkfiles.visitdenmark.com/files/382/142982_Hummer.jpg?width=987',
        iconName: 'pin',
        iconLabel: 'Nyhavn 63A, 1051 København K',
    }
];

const RestaurantScreen = () => {

    return (
        <View style={styles.container}>
            <RestaurantCard title="Restaurants" cards={restaurants} />
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RestaurantScreen;
