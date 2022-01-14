import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const index = ({ image, title, date, price, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('EventDetails')}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dateContainer}>
        <Icon name={'calendar-o'} size={25} />
        <Text style={styles.text}>{date}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          Precio: <Text style={styles.price}>{price}</Text>
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Inscription')}
        >
          <Text style={styles.textButton}>Asistir</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default index;
