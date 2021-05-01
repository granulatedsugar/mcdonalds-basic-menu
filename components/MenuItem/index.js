import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const MenuItem = (props) => {
    
    // Declare props
    const {name, price, image} = props.menu;

    return (

    <View style={styles.menuContainer}>
        
        <ImageBackground source={image} style={styles.image} />

        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{price}</Text>
        </View>

        <View style={styles.buttonContainer}>
            <StyledButton
                type='primary'
                content={'Add to Cart'}
                onPress={() => {
                    console.warn(`${name} added to cart`);
                    }
                }
            />
            <StyledButton 
                type='secondary'
                content={'View Nutrition Summary'}
                onPress={() => {
                    console.warn('Page under construction');
                    }
                }
            />

        </View>
    </View>
    );
};

export default MenuItem;
