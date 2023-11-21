import React, { ReactNode } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';


interface WrapperProps {
    children: ReactNode;
}

const WrapperContainer: React.FC<WrapperProps> = ({ children }) => {
    const img = { uri: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D' }

    return <View style={styles.container}>
        <ImageBackground
            source={img}
            style={styles.background}>
            <SafeAreaView style={{ flex: 1, }}>
                {children}
            </SafeAreaView>
        </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
    },
});


export default WrapperContainer;