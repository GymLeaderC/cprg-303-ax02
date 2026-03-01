/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import RecentSearchHeader from './components/RecentSearchHeader';
import RecentCard from './components/RecentCard';
import ClearRecent from './components/ClearRecent';
import { recentSearches } from '@/data/recentSearchData';

import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";

export default function SearchRecents() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RecentSearchHeader onPress={() => router.back()} />
      <Text style={styles.title}>Recent searches</Text>
      <ScrollView style={styles.scrollView}>
        {recentSearches.map((card) => (
          <RecentCard
            key={card.id}
            title={card.title}
            type={card.type}
            createdBy={card.createdBy}
            explicit={card.explicit}
            image={card.image}
          />
        ))}
        <ClearRecent />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
});