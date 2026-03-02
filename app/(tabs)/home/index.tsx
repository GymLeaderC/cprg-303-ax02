import PlaylistMixCards from '@/components/home/playlistMixCards';
import QuickPickCard from '@/components/home/quickPickCard';
import TopNavBar from '@/components/home/topNavBar';
import { homeSectionsData } from '@/data/homeSectionsData';
import { quickCardPickData } from '@/data/quickCardpickData';
import { topNavBarData } from '@/data/topNavBarData';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topNavRow}>
        <Image source={require('../../../assets/images/jaronadel.png')} style={styles.avatar} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.topNavList}
        >
          {topNavBarData.map((item) => (
            <TopNavBar key={item.id} title={item.title} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.quickPicksGrid}>
        {quickCardPickData.map((item) => (
          <QuickPickCard key={item.id} title={item.title} imageSource={item.image} />
        ))}
      </View>

      <Pressable style={styles.askRow} onPress={() => router.push('/(tabs)/home/djX')}>
        <View style={styles.djBubble}>
          <Ionicons name="disc-outline" size={34} color="#1EEB8D" />
        </View>
        <View style={styles.askButton}>
          <Text style={styles.askText}>Ask for some music</Text>
          <View style={styles.askRightGroup}>
            <View style={styles.betaBadge}>
              <Text style={styles.betaText}>Beta</Text>
            </View>
            <Ionicons name="mic-outline" size={28} color="#B3B3B3" />
          </View>
        </View>
      </Pressable>

      {homeSectionsData.map((section) => (
        <View key={section.id} style={styles.sectionWrap}>
          <Text style={styles.sectionHeading}>{section.heading}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionCardsRow}
          >
            {section.cards.map((card) => (
              <PlaylistMixCards
                key={card.id}
                title={card.title}
                artists={card.artists}
                imageSource={card.image}
              />
            ))}
          </ScrollView>
        </View>
      ))}
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
    paddingRight: 12,
    gap: 10,
  },
  topNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  quickPicksGrid: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  askRow: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  djBubble: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  askButton: {
    flex: 1,
    minHeight: 56,
    borderRadius: 999,
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  askText: {
    color: '#B3B3B3',
    fontSize: 16,
  },
  askRightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  betaBadge: {
    backgroundColor: '#B3B3B3',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  betaText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 14,
  },
  sectionWrap: {
    marginBottom: 16,
  },
  sectionHeading: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  sectionCardsRow: {
    paddingHorizontal: 12,
  },
});
