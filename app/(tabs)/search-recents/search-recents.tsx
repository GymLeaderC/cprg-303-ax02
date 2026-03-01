/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import RecentCard from '@/app/(tabs)/search-recents/RecentCard';
import RecentSearchHeader from '@/app/(tabs)/search-recents/RecentSearchHeader';

import { router } from "expo-router";
import { SafeAreaViewBase, StyleSheet, Text } from 'react-native';

export default function SearchRecents() {
  return (
    <SafeAreaViewBase>
      <RecentSearchHeader onPress={() => router.back()}/>
      <Text style={styles.title}>Recent searches</Text>
      <RecentCard
        key={}
      />
    </SafeAreaViewBase>
  )
  // <Text style={styles.title}>Recent searches</Text>
  // The RecentCard Components array is scrollable, a ScrollView Wrapper will go here
  // Each RecentCard Component will be mapped here
  // The ClearRecent Component will go here
  // Close the ScrollView Wrapper here
  // Close the SafeAreaView Wrapper here
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    backgroundColor: '#121212',
  }, title:{
    
  }
});