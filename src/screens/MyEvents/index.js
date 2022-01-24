import { ScrollView, View, Text, Image } from "react-native";
import { Card, HomeLayout } from "../../components";
import styles from "./styles";

const cardList = [
  {
    image:
      "https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: false,
    key: 1,
  },
  {
    image:
      "https://www.protocoloimep.com/app/uploads/2016/11/evento-sostenible.png",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: false,
    key: 2,
  },
  {
    image: "https://www.esneca.com/wp-content/uploads/eventos-sociales.jpg",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: false,
    key: 3,
  },
  {
    image:
      "https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg",
    title: "Conferencia de Big Data",
    date: "jueves 19 ago. - 8:00pm",
    price: "Gratis",
    inscription: false,
    key: 4,
  },
];

const index = ({ navigation }) => {
  return (
    <HomeLayout title="Mis eventos">
      <ScrollView>
        <View style={styles.container}>
          {cardList.map((card) => {
            return (
              <Card
                image={card.image}
                title={card.title}
                date={card.date}
                price={card.price}
                inscription={card.inscription}
                key={card.key}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default index;
