import { TextInput, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const index = ({ icon, type }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={25} style={styles.icon} />
      <TextInput
        style={styles.input}
        maxLength={50}
        secureTextEntry={type == 'password' ? true : false}
      />
    </View>
  );
};

export default index;
