// SettingsScreen.js
import React, { useState } from 'react';
import { View, Modal, TextInput, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ isVisible, onClose, onSaveNumber }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSave = () => {
    onSaveNumber(phoneNumber);
    setPhoneNumber('');
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSave} style={styles.saveButton} />
          <Button title="Close" onPress={onClose} style={styles.closeButton} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '80%',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },

  saveButton: {
    width: '40%',
  },
  closeButton: {
    width: '40%',
  },
});

export default SettingsScreen;