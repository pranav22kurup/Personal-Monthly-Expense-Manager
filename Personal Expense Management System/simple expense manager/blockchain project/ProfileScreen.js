import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { getUserProfile } from '../services/api';

const ProfileScreen = ({ route }) => {
  const [profile, setProfile] = useState(null);
  const { userId } = route.params;

  useEffect(() => {
    async function fetchProfile() {
      const data = await getUserProfile(userId);
      setProfile(data);
    }
    fetchProfile();
  }, [userId]);

  if (!profile) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Text>Name: {profile.name}</Text>
        <Text>Email: {profile.email}</Text>
        <Text>Followers: {profile.followers.length}</Text>
        <Text>Following: {profile.following.length}</Text>
        <Text>Communities: {profile.communities.length}</Text>
        <Button title="Edit Profile" onPress={() => {/* Navigate to edit profile */}} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;