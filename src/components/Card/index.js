import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const index = ({
  image,
  title,
  date,
  price,
  inscription = true,
  navigation,
  id,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dateContainer}>
        <Icon name={"calendar-o"} size={25} />
        <Text style={styles.text}>{date}</Text>
      </View>

      {inscription ? (
        <View style={styles.footer}>
          <Text style={styles.text}>
            Precio:{" "}
            <Text style={styles.price}>
              {!price ? " Gratis" : `S/. ${price}`}
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("EventDetails", { id, inscription })
            }
          >
            <Text style={styles.textButton}>Asistir</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("EventDetails", { id, inscription })
            }
          >
            <Text style={styles.textButton}>Ver detalles</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default index;
