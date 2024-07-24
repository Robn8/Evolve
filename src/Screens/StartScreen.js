import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { gainXp } from '../PokemonSlice';

const PokemonScreen = () => {
    const { pokemon, xp, level } = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokemon Evolution</Text>
            <Image 
                source={pokemon === 'Pikachu' ? require('../../assets/pik.png') : require('../../assets/rai.png')}
                style={styles.pokemonImage}
            />
            <Text style={styles.text}>XP: {xp}/5</Text>
            <Text style={styles.text}>Level: {level}</Text>
            <Button title='Gain XP' onPress={() => dispatch(gainXp())}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    pokemonImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default PokemonScreen;