import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = () => {
  const data = [
    { id: '1', name: 'Jhon', image: require('./assets/OIP (5).jpg'), isActive: true },
    { id: '2', name: 'Maya', image: require('./assets/OIP (6).jpg'), isActive: true },
    { id: '3', name: 'Carl', image: require('./assets/OIP (8).jpg'), isActive: true },
    { id: '4', name: 'Mark', image: require('./assets/OIP (7).jpg'), isActive: false },
    { id: '5', name: 'IT 3A', image: require('./assets/download (4).jpg'), isActive: true },
    { id: '6', name: 'BISU Balilihan', image: require('./assets/download (3).jpg'), isActive: true},
    { id: '7', name: 'Carlo', image: require('./assets/OIP (5).jpg'), isActive: true },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatarFrame}>
        <Image source={item.image} style={styles.avatar} />
        {item.isActive && <View style={styles.activeDot} />}
      </View>
      <View style={styles.chatDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>!!!!hello world!!!!</Text>
      </View>
      <Text style={styles.time}>1h ago</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chats</Text>
        <View style={styles.headerIcons}>
          <Icon name="camera-alt" size={24} color="#fff" />
          <Icon name="create" size={24} color="#fff" />
        </View>
      </View>
      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.avatarFrames}>
        {data.map((item) => (
          <View style={styles.avatarFrame} key={item.id}>
            <Image source={item.image} style={styles.avatar} />
            {item.isActive && <View style={styles.activeDotInAvatar} />}
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
      
      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        <Icon name="chat-bubble" size={30} color="#0084ff" style={styles.bottomIcon} />
        <Icon name="call" size={30} color="#0084ff" style={styles.bottomIcon} />
        <Icon name="people" size={30} color="#0084ff" style={styles.bottomIcon} />
        <Icon name="add-circle" size={30} color="#0084ff" style={styles.bottomIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'centered',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#201F20', 
  },
  menuIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#333', 
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 24,
    color: '#aaa',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff', 
  },
  avatarFrames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  avatarFrame: {
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  activeDot: {
    width: 12,
    height: 12,
    backgroundColor: '#00FF00', 
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  activeDotInAvatar: {
    width: 16,
    height: 16,
    backgroundColor: '#00FF00', 
    borderRadius: 8,
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff', 
  },
  chatList: {
    paddingHorizontal: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', 
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
  },
  lastMessage: {
    color: '#aaa', 
  },
  time: {
    fontSize: 12,
    color: '#aaa', 
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#201F20', 
    borderTopWidth: 1,
    borderTopColor: '#333', 
  },
  bottomIcon: {
    fontSize: 30,
    color: '#fff',
  },
});

export default ChatScreen;
