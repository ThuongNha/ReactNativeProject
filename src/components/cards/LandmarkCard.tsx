import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';

interface CardProps {
  title: string;
  content: string;
  image: string;
}

interface CardContainerProps {
  title: string;
  cards: CardProps[];
}

const CustomCard: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover style={styles.cover} source={{ uri: image }} />
      <Card.Content style={styles.content}>
        <Text variant="titleMedium">{title}</Text>
        <Text variant="bodySmall">{content}</Text>
      </Card.Content>
    </Card>
  );
};

const LandmarkCard: React.FC<CardContainerProps> = ({ cards }) => {
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
  }
});

export default LandmarkCard;
