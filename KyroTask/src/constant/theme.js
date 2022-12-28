import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const sizes = {
  // global sizes
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1%'),
  iconBigSize: hp('3%'),
  iconMediumSize: hp('2%'),
  iconSmallSize: hp('1%'),
  mediumFontText: hp('1.5%'),

  // font sizes
};
const fontfamily = {
  fontInter: 'Inter-Medium',
  fontInterRegular: 'Inter-Regular',
  outfitRegular: 'Outfit-Regular',
  fontPoppinsMedium: 'Poppins-Medium',
  fontPoppinsBold: 'Poppins-Bold',
};

const baseStyle = {
  txtStyleOutPoppinMedium: (fontSize, fontColor) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterRegular: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutOpenSans: (fontSize, fontColor) => ({
    fontFamily: 'OpenSans-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutPoppinBold: (fontSize, fontColor) => ({
    fontFamily: 'Poppins-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutLatoRegular: (fontSize, fontColor) => ({
    fontFamily: 'Lato-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutLatoBold: (fontSize, fontColor) => ({
    fontFamily: 'Lato-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutInterBold: (fontSize, fontColor) => ({
    fontFamily: 'Inter-Bold',
    fontSize: fontSize,
    color: fontColor,
  }),
  txtStyleOutRobotoReg: (fontSize, fontColor) => ({
    fontFamily: 'Roboto-Regular',
    fontSize: fontSize,
    color: fontColor,
  }),
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#0E69C2',
};

export {sizes, fontfamily, baseStyle, colors};
