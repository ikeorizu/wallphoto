import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyASkO6GOMXsZQOMbl-cZMlSpHQ4nLNqmRk',
    authDomain: 'wallphotos-7021a.firebaseapp.com',
    databaseURL: 'https://wallphotos-7021a.firebaseio.com',
    projectId: 'wallphotos-7021a',
    storageBucket: 'wallphotos-7021a.appspot.com',
    messagingSenderId: '511270316882',
    appId: '1:511270316882:web:2a65288350caa828eda88b'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
