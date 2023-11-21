import React from 'react';
import { View, StyleSheet } from 'react-native';
import LandmarkCard from '../components/cards/LandmarkCard';

const countries = [
    {
        title: "The Round Tower",
        content: "The Round Tower is a 17th-century tower in Copenhagen, Denmark, one of the many architectural projects of Christian IV of Denmark.",
        image: 'https://thinkcopenhagen.com/wp-content/uploads/2022/06/Round-Tower_Copenhagen4-1024x683.jpg', 
        id: 1
    },
    {
        title: "The Little Mermaid",
        content: "The Little Mermaid is a bronze statue by Edvard Eriksen, depicting a mermaid becoming human.",
        image: 'https://files.guidedanmark.org/files/382/83168_The_Little_Mermaid.jpg',
        id: 2
    },
    {
        title: "Nyhavn",
        content: "Nyhavn is a 17th-century waterfront, canal and entertainment district in Copenhagen, Denmark.",
        image: 'https://files.guidedanmark.org/files/382/164757_Nyhavn_Jacob-Schjrring-og-Simon-Lau.jpg', 
        id: 2
    }
];

const LandmarkScreen = () => {
    return (
        <View style={styles.container}>
            <LandmarkCard title="Countries" cards={countries} />
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

export default LandmarkScreen;
