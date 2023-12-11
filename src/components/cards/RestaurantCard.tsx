import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';
import IconLabel from '../layouts/IconLabel';

interface CardProps {
    title: string;
    content: string;
    image: string;
    iconName: string;
    iconLabel: string;
}

interface CardContainerProps {
    title: string;
    cards: CardProps[];
}

const CustomCard: React.FC<CardProps> = ({ title, content, image, iconName, iconLabel }) => {
    return (
        <Card style={styles.container}>
            <Card.Cover style={styles.cover} source={{ uri: image }} />
            <Card.Content style={styles.content}>
                <Text variant="titleMedium">{title}</Text>
                <Text variant="bodySmall">{content}</Text>
                <View style={styles.iconLabelStyle}>
                    <IconLabel
                        name={iconName}
                        label={iconLabel}
                    />
                </View>

            </Card.Content>
        </Card>
    );
};

const RestaurantCard: React.FC<CardContainerProps> = ({ cards }) => {
    return (
        <FlatList
            data={cards}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <CustomCard
                        title={item.title}
                        content={item.content}
                        image={item.image}
                        iconName={item.iconName}
                        iconLabel={item.iconLabel}
                    />
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 300,
        borderRadius: 10,
        backgroundColor: '#89CFF0',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    content: {
        width: 300,
        height: 100,
        overflow: 'hidden'
    },
    cover: {
        borderRadius: 0,
        width: 300,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.9,
    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },
});

export default RestaurantCard;
