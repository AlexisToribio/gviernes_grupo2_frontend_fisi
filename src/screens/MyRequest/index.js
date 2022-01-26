import { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { HomeLayoutAlternative, Input } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { getRequests } from "../../services/getRequests";
import { useUser } from "../../hooks/useUser";

const index = ({ navigation }) => {
  const [{ token }, _] = useUser();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(null);
  const [filteredRequests, setFilteredRequests] = useState([]);
  useEffect(() => {
    setLoading(true);
    getRequests({ token })
      .then((res) => {
        setLoading(false);
        setRequests(res.data);
        setFilteredRequests(res.data);
      })
      .catch((err) => setLoading(false));
  }, []);

  useEffect(() => {
    requests &&
      setFilteredRequests(
        requests.filter((item) =>
          item.titulo.toLowerCase().includes(value.toLowerCase())
        )
      );
  }, [value]);
  const onChange = (val) => setValue(val);

  return (
    
    <HomeLayoutAlternative navigation={navigation}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Lista de Solicitudes</Text>
        </View>
        <View style={styles.search_container}>
          <Input
            onChange={onChange}
            value={value}
            icon="search"
            placeholder="Nro Expediente"
          />
        </View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          filteredRequests?.map((request) => (
            <View style={styles.request} key={request.id}>
              <View style={styles.request_col}>
                <Text>{request.id}</Text>
              </View>
              <View style={styles.request_col}>
                <Text>{request.titulo}</Text>
              </View>
              <View style={styles.request_col}>
                <Icon name="calendar" size={25} style={styles.icon} />
                <Text style={{ marginLeft: 10 }}>{request.fecha_envio}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RequestDetails", {
                    id: request.id,
                  })
                }
              >
                <View style={styles.request_col}>
                  <Icon name="file" size={25} style={styles.icon} />
                </View>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </HomeLayoutAlternative>
  );
};

export default index;
