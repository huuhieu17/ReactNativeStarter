import * as React from 'react';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import CategoryList from './Components/CategoryList';

export interface AppProps {
}

export default function App(props: AppProps) {
  const categories = [
    {
      id: 1,
      name: 'Bông tuyết 1'
    },
    {
      id: 2,
      name: 'Bông tuyết 2'
    },
    {
      id: 3,
      name: 'Bông tuyết 3'
    },
    {
      id: 4,
      name: 'Bông tuyết 4'
    },
    {
      id: 5,
      name: 'Bông tuyết 5'
    },
  ];
  const [list, setList] = React.useState(categories);
  return (
    <>
      <Text>MyApp</Text>
      <FlatList style={styles.container} data={list} renderItem={({ item }) => <CategoryList category={item} />} keyExtractor={item => { item.id }} />
    </>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})