import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lost = () => {
    const navigation = useNavigation();

    const handleRestartGame = () => {
        // Navigate back to the previous screen
        navigation.navigate("Game");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>You Lost!</Text>
            <Button title="Restart Game" onPress={handleRestartGame} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Set background color as per your theme
    },
    message: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Lost;
