import { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { ButtonConfirm, Card, HomeLayout } from "../../components";
import { useUser } from "../../hooks/useUser";
import { getMyEvents } from "../../services/getMyEvents";
import styles from "./styles";

const index = ({ navigation }) => {
  const [{ token }, _] = useUser();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getMyEvents({ token })
      .then((res) => {
        setLoading(false);
        setEvents(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <HomeLayout title="Mis eventos">
      <ScrollView>
        <View style={styles.container}>
          {loading ? (
            <View>
              <Text>Loading...</Text>
            </View>
          ) : events.length < 1 ? (
            <View>
              <Text style={{ textAlign: "center", fontSize: 21 }}>
                No tienes registro en eventos
              </Text>
              <ButtonConfirm
                onPress={() => navigation.navigate("Events")}
                text="Ir a eventos"
              />
            </View>
          ) : (
            events.map((card) => {
              return (
                <Card
                  // image={card.logo}
                  image="https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg"
                  title={card.titulo}
                  date={card.fecha_inicio}
                  price={card.precio_inscripcion}
                  key={card.id}
                  id={card.id}
                  navigation={navigation}
                />
              );
            })
          )}
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default index;
