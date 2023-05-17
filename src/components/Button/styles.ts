import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  loading: {
    opacity: 0.7,
  },
  primary: {
    backgroundColor: '#FFF',
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textButtonPrimary: {
    color: '#ba1247',
  },
  textButtonSecondary: {
    color: '#FFF',
  },
});

export default styles;
