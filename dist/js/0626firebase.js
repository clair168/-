const firebaseConfig = {
    apiKey: "AIzaSyChRJgtUac4CzM0vWsZnOr5pZrAbgm1X6U",
    authDomain: "a20230626.firebaseapp.com",
    databaseURL: "https://a20230626-default-rtdb.firebaseio.com",
    projectId: "a20230626",
    storageBucket: "a20230626.appspot.com",
    messagingSenderId: "953699124839",
    appId: "1:953699124839:web:061b1c532129522fd076c2"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()