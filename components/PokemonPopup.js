import React from 'react';
import { StyleSheet, Modal, Text, TouchableOpacity, Image, View } from 'react-native';

const PokemonPopup = ({ selectedPokemon, handleClosePopup }) => {
    return (
      <Modal visible={Boolean(selectedPokemon)} animationType="slide" transparent={true}>
        <View style={styles.contain}>
          <View style={styles.card}>
            <Text style={styles.title}>{selectedPokemon?.name}</Text>
            <Image source={{ uri: selectedPokemon?.img }} style={styles.image} />
            <Text>Type: {selectedPokemon?.type?.join(', ')}</Text>
            <Text>Height: {selectedPokemon?.height}</Text>
            <Text>Weight: {selectedPokemon?.weight}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };


const styles = StyleSheet.create({
      image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
      },  
      contain: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      closeButton: {
        backgroundColor: '#ddd',
        padding: 10,
        marginTop: 10,
        borderRadius: 3,
      },
      closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    });

export default PokemonPopup;
