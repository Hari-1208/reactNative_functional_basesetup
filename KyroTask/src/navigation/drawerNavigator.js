import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import NavigationService from './NavigationService';
import ScreenNames from './screenNames';

import {dqutill, SCREENS} from '../constant';
import {baseStyle, colors} from '../constant/theme';

function CustomDrawerContent(props) {
  const [checked, setChecked] = useState(1);
  const r = dqutill.getDqUtilData();
  const result = dqutill.getDqUtilData();

  useEffect(() => {
    dqutill.setDqUtilData('checked', 1);
    setChecked(r.checked);
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.borderView}></View>
      <TouchableOpacity
        onPress={() => {
          setChecked(1),
            dqutill.setDqUtilData('checked', 1),
            props.navigation.navigate('Home');
        }}>
        <View style={styles.common}>
          {/* <Image
            source={iconpathurl.dashboard}
            resizeMode="contain"
            style={[
              styles.icon1,
              { tintColor: r.checked == 1 ? colors.blue : colors.menuContent },
            ]}
          /> */}
          <Text
            style={[
              styles.menuDataText,
              {color: r.checked == 1 ? colors.blue : colors.black},
            ]}>
            {'Home'}
          </Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName={SCREENS.HOME}
      options={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name={SCREENS.HOME}
        component={ScreenNames.Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  icon1: {
    width: widthPercentageToDP('6%'),
    height: widthPercentageToDP('7%'),
    resizeMode: 'contain',
  },
  common: {
    flexDirection: 'row',
    marginLeft: widthPercentageToDP('4%'),
    marginTop: heightPercentageToDP('2.5%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuDataText: {
    marginLeft: widthPercentageToDP('2%'),
    fontWeight: '500',
    fontSize: heightPercentageToDP('1.8%'),
  },
  borderView: {
    height: heightPercentageToDP('0.1%'),
    marginRight: widthPercentageToDP('1.5%'),
    marginLeft: widthPercentageToDP('1.5%'),
    backgroundColor: colors.gray,
  },
});

export default DrawerNavigator;
