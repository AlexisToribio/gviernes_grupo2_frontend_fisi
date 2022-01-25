import { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { Card, HomeLayout } from "../../components";
import { useUser } from "../../hooks/useUser";
import { getEvents } from "../../services/getEvents";
import styles from "./styles";

const cardList = [
  {
    image:
      "https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: true,
    key: 1,
  },
  {
    image:
      "https://www.protocoloimep.com/app/uploads/2016/11/evento-sostenible.png",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: true,
    key: 2,
  },
  {
    image: "https://www.esneca.com/wp-content/uploads/eventos-sociales.jpg",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: true,
    key: 3,
  },
  {
    image:
      "https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: true,
    key: 4,
  },
];

const index = ({ navigation }) => {
  const [{ token }, _] = useUser();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getEvents({ token })
      .then((res) => {
        setLoading(false);
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <HomeLayout title="Eventos">
      <ScrollView>
        <View style={styles.container}>
          {loading ? (
            <View>
              <Text>Loading...</Text>
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
