import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Alert, Platform, ToastAndroid } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRouter, Stack } from 'expo-router';

export default function Camera2() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const router = useRouter();

  // Requesting permission
  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  // Flip between front/back camera
  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  // Take picture and return to previous screen
  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Photo taken:', photo.uri);

        // Popup message
        if (Platform.OS === 'android') {
          ToastAndroid.show('Good Job, +1 Streak!', ToastAndroid.SHORT);
        } else {
          Alert.alert('Good Job, +1 Streak!');
        }

        // Navigate back
        router.back();

      } catch (error) {
        console.error('Failed to take picture:', error);
      }
    }
  };

  return (
    <>
      {/* Customize header title and back button */}
      <Stack.Screen
        options={{
          headerTitle: 'Camera',
          headerBackTitle: 'Back',
        }}
      />

      <View style={styles.container}>
        {/* Camera Preview */}
        <CameraView
          style={styles.camera}
          facing={facing}
          ref={cameraRef}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>

        {/* Capture Button */}
        <View style={styles.captureContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
            <Text style={styles.captureText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 32,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  captureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#8CD660',
    padding: 15,
    borderRadius: 25,
  },
  captureText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
