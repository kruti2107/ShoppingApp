import {Dimensions,Platform} from 'react-native';

module.exports={
    screenWidth:Dimensions.get('window').width,
    screenHeight:Dimensions.get('window').height,
    isIOS: Platform.OS === 'iOS',
}