import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { images } from './imageList';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{images[currentIndex].description}</Text>
            <Image source={images[currentIndex]} style={styles.image} />
            
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={handlePrevClick}>
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={handleNextClick}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8EAED',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    image: {
        width: 249,
        height: 354,
        borderRadius: 15,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: 'red',
    },
    description: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 20,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'FFA500',
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontsize: 16,
        textAlign: 'center',
    },
});

export default Gallery;