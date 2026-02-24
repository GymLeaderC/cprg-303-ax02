/**
 *  @author Group 9 - Aaron Reid, Joshua Couto, Kaley Wood
 *  Southern Alberta Institute of Technology: CPRG-303-C
 *  Assignment 2: Advanced Multi-Screen Mobile App w/ Collaborative Navigation
 *  Created: 02.23.2026
 */

import { Stack } from "expo-router";

export default function appLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)" options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="search-recents" options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}