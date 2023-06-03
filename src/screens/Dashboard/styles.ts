import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  searchTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: $COLORS.blackWithOpacity(2),
    borderRadius: 4,
    padding: 10,
    height: 40,
    marginRight: 10,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  repoContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: $COLORS.blackWithOpacity(2),
  },
  repoIconContainer: {
    width: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  repoInfoContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  repoInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: $COLORS.primaryDark,
  },
  repoInfoSubTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  repoUserImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  repoUserImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: $COLORS.blackWithOpacity(2),
  },
  repoInfoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repoInfoLanguage: {
    width: 12,
    height: 12,
    backgroundColor: $COLORS.primary,
    borderRadius: 6,
  },
});

export default styles;
