import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: 340,
    height: 390,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 340,
    height: 220,
    resizeMode: 'cover',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    alignSelf: 'stretch',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
  },
  dateContainer: {
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ECE7E7',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#6B6B6B',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  price: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    width: 100,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AB07',
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
