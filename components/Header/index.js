// rncl
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const Header = () => {

    // Display Logo and Menu
    // View is equal to Div in web Dev
    return (
        
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
        </View>

    );
    
}

export default Header;