import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  TodoList: undefined;
  About: undefined;
  Login: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Danh sách các tác vụ (có thể thay bằng danh sách game)
  const tasks = [
    { id: "1", title: "Go to Todo List", screen: "TodoList" },
    { id: "2", title: "Go to About", screen: "About" },
    { id: "3", title: "Go to Login", screen: "Login" },
    { id: "4", title: "Extra Task 1", screen: "TodoList" },
    { id: "5", title: "Extra Task 2", screen: "About" },
    { id: "6", title: "Extra Task 3", screen: "Login" },
    { id: "7", title: "Extra Task 4", screen: "About" },
    { id: "8", title: "Extra Task 5", screen: "Login" },
  ];

  const renderItem = ({ item }: { item: typeof tasks[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Hiển thị theo dạng lưới
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContent: {
    justifyContent: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#0073e6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 5,
    height: 100,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
