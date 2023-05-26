import {$COLORS} from '@utils';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInput: {
    backgroundColor: $COLORS.blackWithOpacity(2),
    borderRadius: 4,
    height: 40,
    padding: 10,
    color: $COLORS.white,
  },
  errorText: {
    color: $COLORS.white,
    fontStyle: 'italic',
    marginTop: 2.5,
    marginLeft: 5,
  },
});

export default styles;
