import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
  const participants = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
  ];
  const handleParticipantAdd = () => {
    if (participants.includes("a")) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome"
      );
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', 'Remover o participante ' + name + '?', [
      {
        text: 'Sim',
        onPress: () =>Alert.alert (`${name} deletado!`)
      }, 
      {
        text: 'Não'
      }
    ])

    console.log("Removeu ", name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Casa do menino Ney</Text>
      <Text style={styles.eventDate}>Sabádo 18 de novembro</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
