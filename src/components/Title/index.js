import { Text, View } from 'react-native';
import styles from './styles';

const index = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default index;
