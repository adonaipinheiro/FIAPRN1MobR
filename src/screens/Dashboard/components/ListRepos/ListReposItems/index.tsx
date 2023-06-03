import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Divider} from '@components';
import {$COLORS} from '@utils';
import {UserReposType} from 'src/services/useServices';

import styles from './styles';

interface ListReposItemsProps {
  item: UserReposType;
}

export function ListReposItems({item}: ListReposItemsProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(item.html_url);
      }}
      activeOpacity={0.7}
      style={styles.repoContainer}>
      <View style={styles.repoIconContainer}>
        <Icon name="folder" color={$COLORS.primaryDark} size={24} />
      </View>
      <View style={styles.repoInfoContainer}>
        <View>
          <Text style={styles.repoInfoTitle}>{item.name}</Text>
          <Text style={styles.repoInfoSubTitle}>{item.full_name}</Text>
        </View>
        <View style={styles.repoInfoContent}>
          <View style={styles.repoInfoLanguage} />
          <Divider size={5} horizontal />
          <Text>{item.language}</Text>
          <Divider size={10} horizontal />
          <Icon name="star" color={$COLORS.blackWithOpacity(3)} size={16} />
          <Divider size={5} horizontal />
          <Text>{item.stargazers_count}</Text>
        </View>
      </View>
      <View style={styles.repoUserImgContainer}>
        <Image
          source={{
            uri: item.owner.avatar_url,
          }}
          style={styles.repoUserImg}
        />
      </View>
    </TouchableOpacity>
  );
}
