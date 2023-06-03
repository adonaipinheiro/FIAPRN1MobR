import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {$COLORS} from '@utils';

import styles from './styles';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchTextInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite o nome do usuário"
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.searchButton}>
          <Icon name="search" size={16} color={$COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.repoContainer}>
        <View style={styles.repoIconContainer}>
          <Icon name="folder" color={$COLORS.primaryDark} size={24} />
        </View>
        <View style={styles.repoInfoContainer}>
          <View>
            <Text style={styles.repoInfoTitle}>Título</Text>
            <Text style={styles.repoInfoSubTitle}>SubTitle</Text>
          </View>
          <View style={styles.repoInfoContent}>
            <View style={styles.repoInfoLanguage} />
            <Divider size={5} horizontal />
            <Text>Javascript</Text>
            <Divider size={10} horizontal />
            <Icon name="star" color={$COLORS.blackWithOpacity(3)} size={16} />
            <Divider size={5} horizontal />
            <Text>0</Text>
          </View>
        </View>
        <View style={styles.repoUserImgContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/20756362?v=4',
            }}
            style={styles.repoUserImg}
          />
        </View>
      </View>
      <View style={styles.repoContainer}>
        <View style={styles.repoIconContainer}>
          <Icon name="folder" color={$COLORS.primaryDark} size={24} />
        </View>
        <View style={styles.repoInfoContainer}>
          <View>
            <Text style={styles.repoInfoTitle}>Título</Text>
            <Text style={styles.repoInfoSubTitle}>SubTitle</Text>
          </View>
          <View style={styles.repoInfoContent}>
            <View style={styles.repoInfoLanguage} />
            <Divider size={5} horizontal />
            <Text>Javascript</Text>
            <Divider size={10} horizontal />
            <Icon name="star" color={$COLORS.blackWithOpacity(3)} size={16} />
            <Divider size={5} horizontal />
            <Text>0</Text>
          </View>
        </View>
        <View style={styles.repoUserImgContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/20756362?v=4',
            }}
            style={styles.repoUserImg}
          />
        </View>
      </View>
      <View style={styles.repoContainer}>
        <View style={styles.repoIconContainer}>
          <Icon name="folder" color={$COLORS.primaryDark} size={24} />
        </View>
        <View style={styles.repoInfoContainer}>
          <View>
            <Text style={styles.repoInfoTitle}>Título</Text>
            <Text style={styles.repoInfoSubTitle}>SubTitle</Text>
          </View>
          <View style={styles.repoInfoContent}>
            <View style={styles.repoInfoLanguage} />
            <Divider size={5} horizontal />
            <Text>Javascript</Text>
            <Divider size={10} horizontal />
            <Icon name="star" color={$COLORS.blackWithOpacity(3)} size={16} />
            <Divider size={5} horizontal />
            <Text>0</Text>
          </View>
        </View>
        <View style={styles.repoUserImgContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/20756362?v=4',
            }}
            style={styles.repoUserImg}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Dashboard};
