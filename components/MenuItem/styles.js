import  { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

    menuContainer: {
      width: '100%',
      height: Dimensions.get('window').height,
    },

    titles: {
      marginTop:  '30%',
      width: '100%',
      alignItems: 'center',
    },

    title: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      color: '#FFF',
      textShadowColor: 'rgba(0, 0, 0, 0.20)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },

    subTitle: {
      fontSize: 16,
      color: '#FFF',
      textShadowColor: 'rgba(0, 0, 0, 0.50)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },

    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },

    buttonContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    }

});

export default styles;