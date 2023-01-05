import React from 'react';
import {Button, Platform, SafeAreaView, Text} from 'react-native';
import {
  requestMultiple as requestMultiplePermissions,
  PERMISSIONS,
} from 'react-native-permissions';
import {BleManager} from 'react-native-ble-plx';
import uuid from 'react-native-uuid';
import BLEAdvertiser from 'react-native-ble-advertiser';

export const TestingPageName = 'testingPage';
export const TestingPageIcon = require('../../assets/icons/home.png');

const serviceUUID = uuid.v4().slice(0, -4) + 'ae12';

export default function TestingPage() {
  // IOS TO ANDROID BLE ADVERTISING: https://github.com/vitorpamplona/react-native-ble-advertiser/issues/39?fbclid=IwAR0Gd9tbQe04HOARjVp6ibc6iQDeAW0tctbJlL_CzBhUr8X4CJ5y-QtbslA
  const bleManager = new BleManager();
  const APPLE_ID = 0x4c;
  const MANUF_DATA = [1, 0];
  BLEAdvertiser.setCompanyId(APPLE_ID);
  const SCAN_MANUF_DATA = Platform.OS === 'android' ? null : MANUF_DATA;

  const requestForPermissions = async () => {
    const permissionStatuses = await requestMultiplePermissions([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
      PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
      PERMISSIONS.ANDROID.BLUETOOTH_ADVERTISE,
      PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    ]);
    console.log(permissionStatuses);
  };

  const bluetoothDeviceListener = (error, scannedDevice) => {
    if (
      !scannedDevice ||
      !scannedDevice.serviceUUIDs ||
      !scannedDevice.serviceUUIDs.length > 0
    ) {
      return;
    }
    console.log(scannedDevice.serviceUUIDs);
    const isApprochMeDevice = scannedDevice.serviceUUIDs[0].endsWith('ae12');
    if (isApprochMeDevice) {
      console.log('FOUND APPROCHME DEVICE!!');
      console.log(scannedDevice);
    }
  };
  const printBluetoothState = async () => {
    console.log(bleManager);
    const state = await bleManager.state();
    console.log(state);
  };

  const startBluetoothBroadcasting = () => {
    console.log('Starting to Broadcast!!!');
    BLEAdvertiser.broadcast(serviceUUID, SCAN_MANUF_DATA, {}); // The service UUID and additional manufacturer data.
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'blue'}}>Service Id: {serviceUUID}</Text>
      <Button
        onPress={() => printBluetoothState()}
        title="printBluetoothState"
      />
      <Button
        onPress={() => requestForPermissions()}
        title="Request For Permissions"
      />
      <Button
        onPress={() =>
          bleManager.startDeviceScan(null, null, bluetoothDeviceListener)
        }
        title="Start Bluetooth Scanning"
      />
      <Button
        onPress={() => bleManager.stopDeviceScan()}
        title="Stop Bluetooth Scanning"
      />
      <Button
        onPress={() => startBluetoothBroadcasting()}
        title="Start Broadcasting!"
      />
      <Button
        onPress={() => BLEAdvertiser.stopBroadcast()}
        title="Stop Broadcasting!"
      />
    </SafeAreaView>
  );
}
