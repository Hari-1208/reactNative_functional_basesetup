import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fontfamily} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  txt: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: hp('1.8%'),
  },
  button: {
    width: '90%',
    flex: 0.07,
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
