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
const index = ({
  children,
  title,
  redirectionTitle,
  redirection,
  textButton,
  navigation,
}) => {
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
        <Title>{title}</Title>
        {children}
        <View style={styles.signinLink}>
          <Text style={styles.text}>{redirectionTitle}</Text>
          <TouchableOpacity
            style={styles.containerLink}
            onPress={() => navigation.navigate(redirection)}
          >
            <Text style={styles.link}> {textButton}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default index;
