import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Entypo";

const index = ({ type = "date", icon, placeholder, onChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [value, setValue] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setValue(format(new Date(date), "MMMM do, yyyy"));
    hideDatePicker();
  };
  // useEffect(() => {
  //   onChange(value);
  // }, [value]);
  return (
    <>
      <View style={styles.pickerContainer}>
        <TextInput
          value={value}
          style={{ width: "80%", paddingLeft: 5 }}
          placeholder="May 22th, 2022"
        />
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Icon name={icon} size={15} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default index;
