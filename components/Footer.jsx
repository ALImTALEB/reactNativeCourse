import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginBottom: 10,
        padding: 10,
      }}>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}