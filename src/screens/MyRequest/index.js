import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const index = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('RequestDetails')}>
        <Text style={{ marginTop: 100 }}>Hola</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default index;
