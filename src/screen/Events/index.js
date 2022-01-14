import { ScrollView, View, Text, Image } from 'react-native';
import { Card } from '../../components';
import styles from './styles';

const cardList = [
  {
    image:
      'https://ipmark.com/wp-content/uploads/eventos-de-marketing-2021.jpg',
    title: 'Conferencia de Big Data',
    date: 'jueves 19 ago. - 8:00pm',
    price: 'Gratis',
    key: 1,
  },
  {
    image:
      'https://www.protocoloimep.com/app/uploads/2016/11/evento-sostenible.png',
    title: 'Conferencia de Big Data',
    date: 'jueves 19 ago. - 8:00pm',
    price: 'Gratis',
    key: 2,
  },
  {
    image: 'https://www.esneca.com/wp-content/uploads/eventos-sociales.jpg',
    title: 'Conferencia de Big Data',
    date: 'jueves 19 ago. - 8:00pm',
    price: 'Gratis',
    key: 3,
  },
  {
    image:
      'https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg',
    title: 'Conferencia de Big Data',
    date: 'jueves 19 ago. - 8:00pm',
    price: 'Gratis',
    key: 4,
  },
];

const index = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {cardList.map((card) => {
          return (
            <Card
              image={card.image}
              title={card.title}
              date={card.date}
              price={card.price}
              key={card.key}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default index;
