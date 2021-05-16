import axios from 'axios';

// Join meeting normal user
export const getToken = (name, roomName) => {
  return axios
    .post('https://www.clientbroadcast.com/api/twillioVideo/getAccessToken', {
      client_identity: name,
      room_name: roomName,
    })
    .then(res => {
      return res.data.data.accessToken;
    });
};
