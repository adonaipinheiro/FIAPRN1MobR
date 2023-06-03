import React from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {$COLORS} from '@utils';

import {ListRepos} from './components';
import styles from './styles';
import {useDashboard} from './useDashboard';

const Dashboard = () => {
  const {userProfile, setUserProfile, repos, getRepos} = useDashboard();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={userProfile}
          onChangeText={setUserProfile}
          style={styles.searchTextInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite o nome do usuário"
        />
        <TouchableOpacity
          onPress={getRepos}
          activeOpacity={0.7}
          style={styles.searchButton}>
          <Icon name="search" size={16} color={$COLORS.white} />
        </TouchableOpacity>
      </View>
      <ListRepos repos={repos} />
    </SafeAreaView>
  );
};

export {Dashboard};
