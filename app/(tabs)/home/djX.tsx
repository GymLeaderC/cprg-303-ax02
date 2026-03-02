import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const suggestions = [
  'Let DJ pick',
  'Energetic bachata for an evening dance session',
  'Smooth tracks to unwind after work',
];

export default function DjX() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={[styles.content, { paddingTop: insets.top + 8 }]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            <View style={styles.playerCard}>
              <Pressable onPress={() => router.replace('/(tabs)/home')} style={styles.dragHandlePress}>
                <View style={styles.dragHandle} />
              </Pressable>

              <View style={styles.trackRow}>
                <Image source={require('../../../assets/images/dtmf.jpeg')} style={styles.coverArt} />
                <View style={styles.trackMeta}>
                  <Text style={styles.trackTitle} numberOfLines={1}>
                    Baila Inolvidable
                  </Text>
                  <Text style={styles.trackArtist} numberOfLines={1}>
                    Bad Bunny
                  </Text>
                </View>
                <TouchableOpacity style={styles.trackButton}>
                  <Ionicons name="phone-portrait-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.trackButton}>
                  <Ionicons name="play" size={30} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
              </View>
            </View>

            <View style={styles.titleRow}>
              <Text style={styles.title}>Your DJ X here. What can I play for you?</Text>
              <Ionicons name="information-circle-outline" size={24} color="#9EC2E6" />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.suggestionsRow}
            >
              {suggestions.map((item, index) => (
                <View
                  key={item}
                  style={[styles.suggestionCard, index === 0 ? styles.primarySuggestionCard : null]}
                >
                  {index === 0 ? (
                    <View style={styles.djIconWrap}>
                      <Ionicons name="disc-outline" size={26} color="#1EEB8D" />
                    </View>
                  ) : null}
                  <Text style={[styles.suggestionText, index === 0 ? styles.primarySuggestionText : null]}>
                    {item}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </ScrollView>

          <View style={[styles.composerWrap, { paddingBottom: Math.max(insets.bottom, 8) }]}>
            <View style={styles.inputShell}>
              <TextInput
                ref={inputRef}
                autoFocus
                blurOnSubmit={false}
                onBlur={() => setTimeout(() => inputRef.current?.focus(), 0)}
                placeholder="Type a request in English"
                placeholderTextColor="#8EAAC8"
                style={styles.input}
              />
              <TouchableOpacity style={styles.micButton}>
                <Ionicons name="mic-outline" size={22} color="#0D1624" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0C1726',
  },
  container: {
    flex: 1,
    backgroundColor: '#1B5FB6',
  },
  content: {
    paddingBottom: 150,
  },
  playerCard: {
    backgroundColor: '#1A5AAE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 8,
  },
  dragHandle: {
    width: 80,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },
  dragHandlePress: {
    alignSelf: 'center',
    marginBottom: 10,
    paddingVertical: 6,
  },
  trackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  coverArt: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  trackMeta: {
    flex: 1,
  },
  trackTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  trackArtist: {
    color: '#9EC2E6',
    fontSize: 14,
    marginTop: 2,
  },
  trackButton: {
    padding: 6,
  },
  progressTrack: {
    marginTop: 10,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#6D9CD4',
  },
  progressFill: {
    width: '14%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
  },
  titleRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  title: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '700',
    letterSpacing: -1.2,
  },
  suggestionsRow: {
    paddingHorizontal: 16,
    marginTop: 18,
    gap: 12,
  },
  suggestionCard: {
    width: 290,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#3D75BA',
    paddingVertical: 16,
    paddingHorizontal: 14,
    justifyContent: 'center',
    minHeight: 84,
  },
  primarySuggestionCard: {
    width: 170,
    backgroundColor: '#2E70BF',
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  djIconWrap: {
    marginBottom: 14,
  },
  suggestionText: {
    color: '#B8CDE6',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '500',
  },
  primarySuggestionText: {
    color: '#FFFFFF',
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
  },
  composerWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1B5FB6',
    paddingTop: 8,
  },
  inputShell: {
    marginHorizontal: 16,
    borderRadius: 18,
    backgroundColor: '#0F4C98',
    borderWidth: 1,
    borderColor: '#285F9F',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    paddingRight: 8,
    minHeight: 64,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 26,
    paddingVertical: 12,
  },
  micButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
