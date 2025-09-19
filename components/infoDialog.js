import React from 'react';
import { Dialog, Portal, Button, Text } from 'react-native-paper';

export const InfoDialog = ({ visible, onDismiss, whyText }) => (
  <Portal>
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>Why this recommendation?</Dialog.Title>
      <Dialog.Content>
        <Text>{whyText}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onDismiss}>Close</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
);
