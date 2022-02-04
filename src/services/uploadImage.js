import firebase from "firebase";
export const upload = async ({ image, callback }) => {
  const blob = await new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      res(xhr.response);
    };
    xhr.onerror = function () {
      rej(new TypeError("network error"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", image, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref().child(new Date().toISOString());
  const snapshot = ref.put(blob);
  snapshot.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    () => {},
    (error) => {
      blob.close();
      return;
    },
    () =>
      snapshot.snapshot.ref.getDownloadURL().then((url) => {
        console.log({ url });
        callback({ url });
        blob.close();
        return url;
      })
  );
};
