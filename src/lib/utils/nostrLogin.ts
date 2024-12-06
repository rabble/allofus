//import { Connection, subscribe } from '@welshman/net';
import { userProfile } from '../stores/authStore';
//import { tryCatch } from '@welshman/lib';

const relays = [
  'wss://relay.damus.io',
  'wss://relay.nos.social', // Add more relays as needed
];
/*
export const loginWithNostr = async (publicKey: string) => {
  return await tryCatch(async () => {
    // Create a new connection instance
    const connection = new Connection(relays);

    // Open the connection
    await connection.open();

    // Subscribe to kind 0 events for the user's profile
    const subscription = subscribe({
      connection,
      filters: [{ kinds: [0], authors: [publicKey] }],
      onEvent: (event) => {
        console.log('Received profile event:', event);
        userProfile.set(event);
      },
      onError: (error) => {
        console.error('Subscription error:', error);
      },
    });

    // Handle connection closure
    connection.on('close', () => {
      console.log('Connection closed');
    });

    // Return the subscription for further use
    return subscription;
  }, {
    onError: (error) => {
      console.error('Failed to fetch user profile:', error);
    }
  });
}; */