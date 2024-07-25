import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const Train = () => {
  // Pokemon starting health
  const initialHP = 100;
  const [pikachuHP, setPikachuHP] = useState(initialHP);
  const [raichuHP, setRaichuHP] = useState(initialHP);
  const [modalVisible, setModalVisible] = useState(false);

  // Pikachu 4 basic attacks
  const attacks = [
    { name: 'Quick Attack', damage: 10 },
    { name: 'Thunderbolt', damage: 20 },
    { name: 'Electro Ball', damage: 15 },
    { name: 'Iron Tail', damage: 25 },
  ];

  // Raichu damage handler
  const raiHandleAttack = (attack) => {
    const damage = attack.damage;
    setRaichuHP((prevHP) => {
      const newHP = prevHP - damage;
      if (newHP <= 0) {
        setModalVisible(true);
        return 0;
      }
      return newHP;
    });
  };

  // Restart battle handler
  const restartBattle = () => {
    setPikachuHP(initialHP);
    setRaichuHP(initialHP);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pokemonContainer}>
        <View style={styles.pokemon}>
          <Text style={styles.pokemonName}>Pikachu</Text>
          <Image source={require('../../assets/pik.png')} style={styles.pokemonImage} />
          <View style={styles.hpBar}>
            <View style={[styles.hpFill, { width: `${pikachuHP}%` }]} />
          </View>
          <Text style={styles.hpText}>{pikachuHP} HP</Text>
        </View>
        <View style={styles.pokemon}>
          <Text style={styles.pokemonName}>Raichu</Text>
          <Image source={require('../../assets/rai.png')} style={styles.pokemonImage} />
          <View style={styles.hpBar}>
            <View style={[styles.hpFill, { width: `${raichuHP}%` }]} />
          </View>
          <Text style={styles.hpText}>{raichuHP} HP</Text>
        </View>
      </View>
      <View style={styles.attackContainer}>
        {attacks.map((attack, index) => (
          <TouchableOpacity
            key={index}
            style={styles.attackButton}
            onPress={() => raiHandleAttack(attack)}
          >
            <Text style={styles.attackText}>{attack.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Raichu has fainted!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={restartBattle}
            >
              <Text style={styles.modalButtonText}>Restart Battle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  pokemonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  pokemon: {
    alignItems: 'center',
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  hpBar: {
    width: 100,
    height: 10,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  hpFill: {
    height: '100%',
    backgroundColor: 'green',
  },
  hpText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  attackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  attackButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  attackText: {
    color: '#000',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Train;
