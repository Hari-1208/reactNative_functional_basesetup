import React, {useEffect, useState} from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {iconpathurl} from '../../constant/iconpath';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {dqutill, SCREENS} from '../../constant';
import NavigationService from '../../navigation/NavigationService';
import CustomSafeArea from '../../components/customSafeArea';
import {colors} from '../../constant/theme';

function LoginScreen(props) {
  useEffect(() => {}, []);

  return (
    <CustomSafeArea backgroundColor={colors.blue} style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate(SCREENS.DASHBOARD);
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </CustomSafeArea>
  );
}

const mapStateToProps = state => ({});

const Actions = {};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
