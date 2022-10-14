import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Item from "../Item/ItemFlatList";
import styles from "./styleBai01";

const Data = [
  { id: 0, name: "Phone" },
  { id: 1, name: "TV" },
  { id: 2, name: "Book" },
];

export default function ScreenBai01() {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <TextInput style={styles.inputText} placeholder="Input Text" />
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.titleButtonAdd}>+</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.listItem}>
        <FlatList data={Data} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
}
