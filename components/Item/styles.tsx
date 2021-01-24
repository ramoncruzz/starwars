import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 2,
    backgroundColor: '#edf2f4',
    marginBottom: 5,
    borderRadius: 10,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    margin: 5,
    backgroundColor: 'tomato',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    height: 50,
    alignSelf: 'center',
  },
});

export default styles;
