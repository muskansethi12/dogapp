import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const SubBreedListScreen = ({ route, navigation }) => {
  const { breed } = route.params;
  const [subBreeds, setSubBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
        const data = await response.json();
        setSubBreeds(data.message);
      } catch (error) {
        console.error('Error fetching sub-breeds:', error);
      }
    };
    fetchData();
  }, [breed]);

  const handleSubBreedPress = (subBreed) => {
    navigation.navigate('ImageScreen', { breed, subBreed });
  };

  const renderSubBreedItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSubBreedPress(item)}>
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={subBreeds}
      renderItem={renderSubBreedItem}
      keyExtractor={(item) => item}
    />
  );
};

export default SubBreedListScreen;
