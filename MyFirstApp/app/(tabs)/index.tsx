// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
// const myName = "Tsukinosaur";
// const greet = (name:string) => {
//   return `Hello, ${name}!`;
// };
// const classmates = ["June","Jana","Jackie","Regie","Jaydee"];
// classmates.map(name => greet(name));

// console.log(classmates.map(name => greet(name)));

//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Hello, Tsukinosaur!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

//changed the bg color, name, and profile link (5.13.26)

// import { Image } from 'expo-image';
// import { StyleSheet } from 'react-native';
// import { View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View style={s.screen}>
//       <Image
//         source={{ uri: 'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/378408608_2941995982601352_1709841353273746055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF44PzMresvfXhb2D0QDp6rkTkgrw-e2guROSCvD57aC50scVbHQ5dkgPFDC0_2vGzue1L9vRC6rGHZYD0rfmtp&_nc_ohc=3ARM61It6j4Q7kNvwGpVNi_&_nc_oc=AdpdOfOC3PbNVjg9127FxFel-lO7nhhR6B_gFheV9ph9FWpgUXWJC3yya6mTRVI52XQ&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=vqi8MIdyrxznhSjK7hnnkg&_nc_ss=7b2a8&oh=00_Af45PX8sbTOwPoKJePwJP5UpZoIkDGeZ5eyvA_IXpTikAQ&oe=6A0A57E2' }}
//         style={s.photo}
//       />
//       <Text style={s.name}>Maychelle Ivee Acain</Text>
//       <Text style={s.bio}>MMA Student • A302 • @Tsukinosaur</Text>
//     </View>
//   );
// }

// const s = StyleSheet.create({
//   screen: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#204718' },
//   photo:  { width: 120, height: 120, borderRadius: 60 },
//   name:   { fontSize: 22, fontWeight: 'bold', marginTop: 12, color: '#fffdcd' },
//   bio:    { fontSize: 14, color: '#faffc6' }
// });

//changed the bg color, name, profile link, and made it more interactive (5.13.26) 
import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
 
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

 
  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Image source={{ uri: 'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/378408608_2941995982601352_1709841353273746055_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF44PzMresvfXhb2D0QDp6rkTkgrw-e2guROSCvD57aC50scVbHQ5dkgPFDC0_2vGzue1L9vRC6rGHZYD0rfmtp&_nc_ohc=3ARM61It6j4Q7kNvwGpVNi_&_nc_oc=AdpdOfOC3PbNVjg9127FxFel-lO7nhhR6B_gFheV9ph9FWpgUXWJC3yya6mTRVI52XQ&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=vqi8MIdyrxznhSjK7hnnkg&_nc_ss=7b2a8&oh=00_Af45PX8sbTOwPoKJePwJP5UpZoIkDGeZ5eyvA_IXpTikAQ&oe=6A0A57E2' }} style={styles.image} />

   
      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={styles.input}
      />

    
      <Text style={styles.text}>
        {name === '' ? "Please enter your name" : `Hello, ${name}!`}
      </Text>

      
      <Text style={styles.text}>{message}</Text>

  
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f9e7'
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#626262',
    backgroundColor: '#FFF',
    color: '#333',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#061603',
    fontWeight: 'bold'
  },

  buttonContainer: {
    marginTop: 10,
    width: '60%'
  }
});