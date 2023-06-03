import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {ListUserReposType} from 'src/services/useServices';

import {ListReposItems} from './ListReposItems';

interface ListReposProps {
  repos: ListUserReposType;
}

export function ListRepos({repos}: ListReposProps) {
  return (
    <FlatList
      data={repos}
      ListEmptyComponent={
        <View>
          <Text>Nada</Text>
        </View>
      }
      renderItem={({item}) => <ListReposItems item={item} />}
    />
  );
}
