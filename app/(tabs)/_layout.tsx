/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.23.2026
 */

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#282828',
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#B3B3B3',
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home"}} />
      <Tabs.Screen name="search" options={{ title: "Search"}} />
      <Tabs.Screen name="library" options={{ title: "Your Library"}} />
      <Tabs.Screen name="create" options={{ title: "Create"}} />
    </Tabs> 
  )
}