import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useServices} from '@services';
import {$COLORS} from '@utils';

const renderIcon = (color: string) => (
  <Icon name="sign-out-alt" size={16} color={color} />
);

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {getUserName, signOut} = useServices();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userAreaContainer}>
        <View style={styles.userImgArea} />
        <Text style={styles.useAreaText}>Olá, {getUserName()}!</Text>
      </View>
      <DrawerContentScrollView style={styles.container} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        icon={({color}) => renderIcon(color)}
        onPress={signOut}
        inactiveTintColor={$COLORS.primary}
        {...props}
        label={'Sair'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userAreaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  userImgArea: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: $COLORS.blackWithOpacity(2),
  },
  useAreaText: {
    fontSize: 14,
    marginTop: 10,
  },
});
