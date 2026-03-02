import QuickPickCard from '@/components/home/quickPickCard';
import TopNavBar from '@/components/home/topNavBar';
import { quickCardPickData } from '@/data/quickCardpickData';
import { topNavBarData } from '@/data/topNavBarData';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.topNavList}
      >
        {topNavBarData.map((item) => (
          <TopNavBar key={item.id} title={item.title} />
        ))}
      </ScrollView>

      <View style={styles.quickPicksGrid}>
        {quickCardPickData.map((item) => (
          <QuickPickCard key={item.id} title={item.title} imageSource={item.image} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  contentContainer: {
    paddingTop: 56,
    paddingBottom: 120,
  },
  topNavList: {
    paddingHorizontal: 12,
    gap: 10,
    marginBottom: 14,
  },
  quickPicksGrid: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
