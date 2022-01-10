import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function PosterItem({ header, content, interaction }) {
  const [total, setTotal] = useState()
  const [visibleSubContent, setVisibleSubContent] = useState(true)
  const [visibleImage, setVisibleImage] = useState(false)
  const [visibleVideo, setVisibleVideo] = useState()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setTotal(
      Object.values(interaction.Emotions).reduce((prev, cur) => cur + prev),
    )
    if (content.typePost === 'image') {
      setVisibleSubContent(false)
    }
    return () => {
      setTotal()
    }
  }, [])

  return (
    // --------------- HEADER ------------------
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: header.avatar }} style={styles.avatar} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.nameHeader}>{header.name}</Text>
          <Text>
            <Text>{header.createdTime}</Text>
            <Text style={{ paddingHorizontal: 10 }}>·</Text>
            <Icon name="globe-americas" size={10} />
          </Text>
        </View>
        <Icon name="ellipsis-h" size={25} style={styles.iconOther} />
      </View>

      {/* ----------- CONTENT----------- */}
      <View style={styles.content}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: '400',
              fontFamily: 'sans-serif',
              paddingLeft: 2,
              paddingBottom: 10,
            }}
          >
            {content.caption}
          </Text>
          <Image
            source={{ uri: content.contentPost }}
            style={{
              width: Dimensions.get('screen').width,
              height: 260,
              marginBottom: 20,
            }}
          />
          {visibleSubContent && (
            <View style={styles.subContent}>
              <Text>{content.subContent.domain}</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
                numberOfLines={2}
              >
                {content.subContent.title}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* ---------------- INTERACTION --------------- */}
      {/* ------------------ INDEX ---------------- */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
          borderBottomWidth: 1,
          width: Dimensions.get('screen').width - 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Pressable style={{ flexDirection: 'row' }}>
          <Icon name="thumbs-up" size={25} solid />
          <Icon name="grin-squint" size={25} solid />
          <Text style={{ textAlignVertical: 'center' }}> {total}</Text>
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 10, fontSize: 15 }}>
            {interaction.Comments.length} Comments
          </Text>
          <Text style={{ marginRight: 10, fontSize: 15 }}>
            {interaction.Shares.length} Shares
          </Text>
        </View>
      </View>

      {/* ----------------- EVENT ------------- */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{ flexDirection: 'row' }}
        >
          <Icon name="thumbs-up" size={25} solid={liked} />
          <Text> Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Icon name="comment" size={25} />
          <Text> Commet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Icon name="share" size={25} />
          <Text> Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginVertical: 10,
    shadowColor: '#000',
  },
  header: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  iconOther: {
    position: 'absolute',
    right: 10,
  },
  nameHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: { backgroundColor: '#fff' },
  subContent: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    width: Dimensions.get('screen').width,
  },
})
