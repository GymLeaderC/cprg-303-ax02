/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.21.2026
 */

import { browseAllData, discoverData, startBrowsingData } from "../../data/searchData"
import CategoryCard from "./search/CategoryCard"
import DiscoverCard from "./search/DiscoverCard"
import SearchBar from "./search/SearchBar"
import SearchHeader from "./search/SearchHeader"

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { router } from "expo-router"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Search() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: tabBarHeight + 16 }}
      >
        <SearchHeader />
        <SearchBar onPress={() => router.push('/(tabs)/search-recents/search-recents')} />

        <Text style={styles.title}>
          Start browsing
        </Text>
        <View style={styles.flexView}>
          {startBrowsingData.map((card) => (
            <CategoryCard
              key={card.id}
              title={card.title}
              backgroundColor={card.backgroundColor}
              image={card.image}
              size={card.size}
            />
          ))}
        </View>

        <Text style={styles.title}>
          Discover something new
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {discoverData.map((card) => (
            <DiscoverCard
              key={card.id}
              title={card.title}
              image={card.image}
            />
          ))}
        </ScrollView>

        <Text style={styles.title}>
          Browse all
        </Text>
        <View style={styles.flexView}>
          {browseAllData.map((card) => (
            <CategoryCard
              key={card.id}
              title={card.title}
              backgroundColor={card.backgroundColor}
              image={card.image}
              size={card.size}
            />
          ))}
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
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  flexView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    paddingHorizontal: 16,
  },
});