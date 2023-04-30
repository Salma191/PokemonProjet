import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal , ScrollView} from 'react-native';
import PokemonList from './components/PokemonList';
import PokemonPopup from './components/PokemonPopup';

  const App = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [pokemonByType, setPokemonByType] = useState({});
  
    const handlePokemonPress = pokemon => {
      setSelectedPokemon(pokemon);
    };
  
    const handleClosePopup = () => {
      setSelectedPokemon(null);
    };
  
    // regrouper les pokémons par type lors de la première exécution du composant
    React.useEffect(() => {
      fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(response => response.json())
        .then(data => {
          const pokemons = data.pokemon;
          setPokemonByType(
            pokemons.reduce((accumulator, pokemon) => {
              pokemon.type.forEach(type => {
                if (!accumulator[type]) accumulator[type] = [];
                accumulator[type].push(pokemon);
              });
              return accumulator;
            }, {})
          );
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Pokémon List</Text>
          <PokemonList pokemonByType={pokemonByType} handlePokemonPress={handlePokemonPress} />
          <PokemonPopup selectedPokemon={selectedPokemon} handleClosePopup={handleClosePopup} />
        </ScrollView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  }, 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // title: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   marginBottom: 5,
  // },
});

export default App;
