import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GiftedImage from 'react-native-gifted-image';

const App = () => {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    // Simulate fetching an image from an API
    const fetchImage = async () => {
      try {
        const response = await fetch('https://www.easygifanimator.net/images/samples/video-to-gif-sample.gif');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
      {image && (
        <GiftedImage source={{ uri: image }} style={styles.image} />
      )}
      {!image && <Text>Loading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;