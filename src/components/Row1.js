import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    text: {
        marginLeft: 12,
        fontSize: 16
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20
    } 
});

const Row = (props) => (
    <View style={styles.container}>
        <Image source={{ uri: props.picture.large }} style={styles.photo} />
        <Text style={styles.text}>
            {`${props.name.first} ${props.name.last}`}
        </Text>
    </View>
);

export default Row;

/*<Image source={{ uri: props.picture.large }} style={styles.photo} />*/