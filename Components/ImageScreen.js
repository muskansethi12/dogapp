import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const ImageScreen = ({ route }) => {
  const { breed, subBreed } = route.params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${subBreed ? `${breed}/${subBreed}` : breed}/images`
        );
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchData();
  }, [breed, subBreed]);

  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item }}
      style={{ width: 300, height: 300, margin:15,marginLeft:30 }}
    />
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ImageScreen;
