import { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { Card, HomeLayout, Loader } from "../../components";
import { useUser } from "../../hooks/useUser";
import { getEvents } from "../../services/getEvents";
import styles from "./styles";

const index = ({ navigation }) => {
  const [{ token }, _] = useUser();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getEvents({ token })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setEvents(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <HomeLayout title="Eventos">
      <ScrollView>
        <View style={styles.container}>
          {loading ? (
            <Loader />
          ) : (
            events.map((card) => {
              return (
                <Card
                  image={card.logo}
                  // image="https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg"
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
