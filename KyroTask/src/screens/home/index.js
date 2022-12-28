import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
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

function HomeScreen(props) {
  useEffect(() => {}, []);

  const openDrawerTab = () => {
    props.navigation.openDrawer();
  };

  return (
    <CustomSafeArea backgroundColor={colors.blue} style={styles.container}>
      <Text style={styles.txt}>HOME</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          openDrawerTab();
        }}>
        <Text style={styles.txt}>Open Drawer</Text>
      </TouchableOpacity>
    </CustomSafeArea>
  );
}

const mapStateToProps = state => ({});

const Actions = {};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
