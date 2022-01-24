import { Text, View } from 'react-native';
import { Input, Button, AuthLayout } from '../../components';
import styles from './styles';

const index = ({ navigation }) => {
  const onPress = () => navigation.navigate('Register');
  return (
    <AuthLayout
      title="Inicio de sesión"
      redirection="Register"
      redirectionTitle="¿No tienes una cuenta?"
      textButton="Regístrate"
      navigation={navigation}
    >
      <View>
        <Text style={styles.label}>Correo</Text>
        <Input icon="envelope" />
      </View>
      <View style={styles.div}>
        <Text style={styles.label}>Contraseña</Text>
        <Input icon="lock" type="password" />
      </View>
      <Button onPress={onPress}>Iniciar Sesión</Button>
    </AuthLayout>
  );
};

export default index;