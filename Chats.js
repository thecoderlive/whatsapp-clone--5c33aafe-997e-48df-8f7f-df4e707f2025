import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function Chats({ item, navigation }){



function chatsItem({ item }){
return (
<View style={styles.chats_item}>
<Image
    style={styles.chat_image}
    source={{uri: item.chat_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.chat_name} numberOfLines={1}>{item.chat_name}</Text>
<Text style={styles.last_message} numberOfLines={1}>{item.last_message}</Text>
<Text style={styles.last_message_time} numberOfLines={1}>{item.last_message_time}</Text>
</View>
</View>
)}

return (
<FlatList
    style={styles.chats}
    data={item}
    renderItem={chatsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Chats;

const styles = StyleSheet.create({
    "chat_image": {
        "width": "18vw",
        "height": "18vw",
        "marginTop": 5
    },
    "chat_name": {
        "flex": 1,
        "color": "#0b0909",
        "fontSize": 16,
        "fontWeight": "500",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "last_message": {
        "flex": 1,
        "color": "#0b0909",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "last_message_time": {
        "flex": 1,
        "color": "#090707",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    }
});