import { StyleSheet, View, Text, TouchableOpacity , Image} from 'react-native';
 

const PokemonList = ({ pokemonByType, handlePokemonPress }) => {
    return (
      <>
        {Object.entries(pokemonByType).map(([type, pokemonList]) => (
          <View key={type} style={styles.typeSection}>
            <Text style={styles.typeTitle}>{type}</Text>
            <View style={styles.pokemonList}>
              {pokemonList.map(pokemon => (
                <TouchableOpacity key={pokemon.id} onPress={() => handlePokemonPress(pokemon)}>
                  <Image source={{ uri: pokemon.img }} style={styles.image} />
                  <Text style={styles.pokemonName}>{pokemon.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </>
    );
  };

const styles = StyleSheet.create({
    //   image: {
    //     width: 100,
    //     height: 100,
    //     resizeMode: 'contain',
    //     marginBottom: 10,
    //   },
      typeSection: {
        marginBottom: 20,
      },
      typeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      pokemonList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      pokemonName: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      image: {
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5,
      }
});

export default PokemonList;
