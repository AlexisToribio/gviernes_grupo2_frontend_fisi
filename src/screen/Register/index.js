import {
  Image,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Input, Title, Button } from '../../components';
import styles from './styles';

const index = ({ navigation }) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../../assets/backgroundRegister.png')}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={require('../../../assets/Logo.png')}
        />
        <Title>Regístrate</Title>
        <View>
          <Text style={styles.label}>Nombres</Text>
          <Input icon="user" />
        </View>
        <View>
          <Text style={styles.label}>Apellidos</Text>
          <Input icon="user" />
        </View>
        <View>
          <Text style={styles.label}>Correo</Text>
          <Input icon="envelope" />
        </View>
        <View>
          <Text style={styles.label}>Contraseña</Text>
          <Input icon="lock" type="password" />
        </View>
        <View>
          <Text style={styles.label}>Confirmar contraseña</Text>
          <Input icon="lock" type="password" />
        </View>
        <Button>Regístrate</Button>
        <View style={styles.signinLink}>
          <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            style={styles.containerLink}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.link}> Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default index;
