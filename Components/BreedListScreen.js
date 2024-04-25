import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const BreedsListScreen = ({ navigation }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };
    fetchData();
  }, []);

  const handleBreedPress = (breed) => {
    navigation.navigate('SubBreedListScreen', { breed });
  };

  const renderBreedItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBreedPress(item)}>
      <View style={{ padding: 10  }}>
        <Text style={{fontSize:15}}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={breeds}
      renderItem={renderBreedItem}
      keyExtractor={(item) => item}
    />
  );
};

export default BreedsListScreen;
