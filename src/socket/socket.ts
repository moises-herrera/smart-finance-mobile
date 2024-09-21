import { io } from 'socket.io-client';
import { expoExtraConfig } from 'src/constants';

export const socket = io(expoExtraConfig?.EXPO_PUBLIC_SOCKET_URL);
