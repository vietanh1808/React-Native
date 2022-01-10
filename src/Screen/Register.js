import React, { useMemo, useState } from 'react'
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import RadioButton from '../components/RadioButton'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Register({ navigation }) {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const [selectedSex, setSelectedSex] = useState(0)
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState(0)

  const onChange = (event, selectedDate) => {
    event.type === 'set' ? setDate(selectedDate) : setDate(date)
    setShow(false)
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageHeader}
        source={require('../assets/header_register.png')}
      />
      <Text style={styles.title}>Bạn tên gì?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TextInput
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder=" Họ "
          style={styles.inputName}
        />
        <TextInput
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder=" Tên "
          style={styles.inputName}
        />
      </View>
      <Text style={styles.title}>Ngày sinh của bạn là ngày nào?</Text>
      <View style={styles.indexDateContainer}>
        <Text onPress={() => setShow(!show)} style={styles.indexDate}>
          {date.getDate()}
        </Text>
        <Text>/</Text>
        <Text onPress={() => setShow(!show)} style={styles.indexDate}>
          {date.getMonth()}
        </Text>
        <Text>/</Text>
        <Text onPress={() => setShow(!show)} style={styles.indexDate}>
          {date.getFullYear()}
        </Text>
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          onTouchCancel={() => setShow(!show)}
        />
      )}
      <Text style={styles.title}>Giới tính của bạn là gì?</Text>
      <RadioButton
        items={['Nam', 'Nữ', 'Khác']}
        horizonal={true}
        selected={selectedSex}
        onChangeSelect={(item, index) => {
          setSelectedSex(index)
        }}
      />
      <Text style={styles.title}>Số di động của bạn là gì?</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SelectDropdown
          data={['VN', 'ENG', 'JPN']}
          onSelect={(selectItem, index) => {
            setSelectedPhoneNumber(selectItem)
          }}
          buttonTextAfterSelection={(selectItem, index) => {
            return selectItem
          }}
          rowTextForSelection={(selectItem, index) => {
            return selectItem
          }}
          defaultButtonText="VN"
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            )
          }}
        />
        <TextInput keyboardType="phone-pad" style={styles.textInput} />
      </View>
      <Text style={styles.title}>Tạo mật khẩu</Text>
      <TextInput
        keyboardType="visible-password"
        style={[styles.textInput, { alignSelf: 'center' }]}
      />

      <TouchableOpacity
        style={styles.SubmitButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: '#fff' }}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 1,
  },
  imageHeader: {
    width: Dimensions.get('screen').width,
    height: 200,
    resizeMode: 'stretch',
  },
  inputName: {
    width: 150,
    height: 35,
    backgroundColor: '#fff',
    color: '#000',
  },
  title: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  indexDate: {
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 20,
  },
  indexDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  textInput: {
    width: 220,
    height: 40,
    backgroundColor: '#fff',
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  SubmitButton: {
    marginTop: 15,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#5890ff',
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
  },
})
