import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, SectionList } from 'react-native';

const CatImage = () => (
  <Image
    source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
    style={styles.catImage}
  />
);

const MeetingInfo = ({ name }) => (
  <View style={styles.meetingInfo}>
    <Text style={styles.infoText}>Hello, I am {name}!</Text>
  </View>
);

const App = () => {
  const [name, setName] = React.useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meeting App</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesquise o proximo niver"
        onChangeText={setName}
      />
      <CatImage />
      <MeetingInfo name={name} />
      <SectionListBasics />
    </ScrollView>
  );
};


const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Aniversariantes do Mês de Setembro', data: ['Pedro - dia 10', 'Dan - dia 18'] },
          {
            title: 'Aniversariantes do Mês de Outubro',
            data: [
              'Joel - dia 02',
              'John - dia 23',
              'Breno - dia 30',
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  catImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  meetingInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
