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
import dateFormat from "dateformat";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Entypo";

const index = ({
  type = "date",
  icon,
  placeholder = "May 22th, 2022",
  onChange,
  formater = "mmmm dS, yyyy",
  formaterValue = "yyyy-mm-dd",
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [value, setValue] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dateFormatted = dateFormat(new Date(date), formater);
    const dateFormatted2 = dateFormat(new Date(date), formaterValue);
    onChange(dateFormatted2);
    setValue(dateFormatted);
    hideDatePicker();
  };

  return (
    <>
      <View style={styles.pickerContainer}>
        <TextInput
          value={value}
          style={{ width: "80%", paddingLeft: 5 }}
          placeholder={placeholder}
        />
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Icon name={icon} size={15} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={type}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default index;
