/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.24.2026
 */

import RecentSearchHeader from '@/components/search-recents/RecentSearchHeader';

import { SafeAreaView, Pressable, ScrollView, Text, StyleSheet } from 'react-native';
import { router } from "expo-router";

export default function SearchRecents() {
  return (
    <SafeAreaView>
      <RecentSearchHeader onPress={() => router.back()}/>
      
    </SafeAreaView>
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
  }
});