import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import MenuItem from '../MenuItem';
import menu from './menu';
import styles from './styles';

const MenuList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={menu}
                renderItem={({item}) => <MenuItem menu={item} />}
                showsVerticalScrollIndicator={false} // hide scrolling
                snapToAlignment={'start'}
                decelerationRate={'fast'} // speed of animation
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default MenuList;
