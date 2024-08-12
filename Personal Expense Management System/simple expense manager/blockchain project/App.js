import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import UploadScreen from './screens/UploadScreen';
import SettingsScreen from './screens/SettingsScreen';
import CommunityScreen from './screens/CommunityScreen';
import CommunityDetailsScreen from './screens/CommunityDetailsScreen';
import SpotlightScreen from './screens/SpotlightScreen';
import ChronicleScreen from './screens/ChronicleScreen';
import InteractionsScreen from './screens/InteractionsScreen';
import BestBuddiesScreen from './screens/BestBuddiesScreen';
import ManualsScreen from './screens/ManualsScreen';
import CoCreateScreen from './screens/CoCreateScreen';
import MusicPreferencesScreen from './screens/MusicPreferencesScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import DirectMessagingScreen from './screens/DirectMessagingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="CommunityDetails" component={CommunityDetailsScreen} />
        <Stack.Screen name="Spotlight" component={SpotlightScreen} />
        <Stack.Screen name="Chronicle" component={ChronicleScreen} />
        <Stack.Screen name="Interactions" component={InteractionsScreen} />
        <Stack.Screen name="BestBuddies" component={BestBuddiesScreen} />
        <Stack.Screen name="Manuals" component={ManualsScreen} />
        <Stack.Screen name="CoCreate" component={CoCreateScreen} />
        <Stack.Screen name="MusicPreferences" component={MusicPreferencesScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="DirectMessaging" component={DirectMessagingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}