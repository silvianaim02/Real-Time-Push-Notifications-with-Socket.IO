import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    socket.on('pushNotification', (data) => {
      console.log('Received', data);
      setNotification((prev) => [...prev, data]);
    });

    return () => {
      socket.off('pushNotification');
    };
  }, []);

  return (
    <div>
      <h1>Push Notification</h1>
      <ul>
        {notification?.map((notif, index) => (
          <li style={{ color: 'red' }} key={index}>
            notif : {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
