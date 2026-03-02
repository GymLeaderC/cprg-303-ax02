/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import RecentSearchHeader from '../../../components/search/RecentSearchHeader';
import RecentCard from '../../../components/search/RecentCard';
import ClearRecent from '../../../components/search/ClearRecent';
import { recentSearches } from '@/data/recentSearchData';

import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";

export default function SearchRecents() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RecentSearchHeader onPress={() => router.back()} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Recent searches</Text>
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
        <View style={styles.clearRecent}>
          <ClearRecent />
        </View>
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
    paddingTop: 8,
    paddingBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
  clearRecent: {
    marginBottom: 40,
  },
});