import React from 'react'
import Route from './src/navigation'

const App: React.FC = () => {
  return <Route />
}
export default App

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   PermissionsAndroid,
//   StyleSheet
// } from "react-native";
// import React, { useEffect } from "react";
// import RNFetchBlob from "rn-fetch-blob";

// const App = () => {
//   useEffect(() => {
//     checkPermission();
//   }, []);

//   const demo = () => {
//     const folderPath = "/storage/emulated/0/Test.apk";
//     RNFetchBlob.android
//       .actionViewIntent(folderPath, "application/vnd.android.package-archive")
//       .then((res) => {
//         console.log("ress::", res);
//       })
//       .catch((e) => {
//         console.log("e", e);
//       });
//   };

//   const checkPermission = () => {
//     PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       {
//         title: "message...",
//         message: "message...",
//         buttonNeutral: "message..",
//         buttonNegative: "No",
//         buttonPositive: "Yes"
//       }
//     ).then((res) => {
//       console.log(res);
//       if (res == "granted") {
//         const folderPath = "/storage/emulated/0/PBX/";
//         RNFetchBlob.fs
//           .mkdir(folderPath)
//           .then((res) => {
//             console.log("res path:::", res);
//           })
//           .catch((err) => {
//             console.log("eeeee path:::", err);
//           });
//       } else {
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={demo}>
//         <Text style={{ fontSize: 25 }}>Install app</Text>
//         <Text style={{ fontSize: 25 }}>Download Apk file</Text>
//       </TouchableOpacity>
//       <View style={{ height: 300, width: 200, backgroundColor: "red" }}></View>
//       <View style={styles.card}>
//         <Text>app</Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   card: {
//     height: 100,width:200,
//     borderRadius: 10,
//     marginTop: 20,
//     backgroundColor: "blue"
//   }
// });
