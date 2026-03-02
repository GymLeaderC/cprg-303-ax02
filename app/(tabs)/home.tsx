import TopNavBar from '@/components/home/topNavBar';
import { topNavBarData } from '@/data/topNavBarData';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={topNavBarData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.topNavList}
        renderItem={({ item }) => <TopNavBar title={item.title} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 56,
  },
  topNavList: {
    paddingHorizontal: 12,
    gap: 10,
  },
});
