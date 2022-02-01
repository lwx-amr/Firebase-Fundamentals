import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, onSnapshot, query, where, orderBy} from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDdXRqcsuQdagTSZVDZ0y4KW4MrHEbvrgI",
  authDomain: "lwxamr-1fbd7.firebaseapp.com",
  databaseURL: "https://lwxamr-1fbd7.firebaseio.com",
  projectId: "lwxamr-1fbd7",
  storageBucket: "lwxamr-1fbd7.appspot.com",
  messagingSenderId: "367621077079",
  appId: "1:367621077079:web:61f26060ab39164fd8cb12",
  measurementId: "G-YWP1B6MVD0"
});

const firestore = getFirestore();


const dailyspecial = collection(firestore, 'dailyspecial');

const specialOfTheDay = doc(firestore, 'dailyspecial/2022-02-01');

async function addNewDoc(){
  const newDoc = await addDoc(dailyspecial, {
    description: 'new day event 2',
    priority: 'medium',
    events: false,
  })
  console.log(newDoc);
}

async function getSingleDoc(path){
  const mySnapShot = await getDoc(specialOfTheDay);
  if(mySnapShot.exists()){
    const docData = mySnapShot.data();
    console.log(`My doc data ${JSON.stringify(docData)}`);
  }
}

let specialOfTheDayUnSubscribe;

async function listenToDocument(){
  specialOfTheDayUnSubscribe = onSnapshot(specialOfTheDay, docSnapshot => {
    if(docSnapshot.exists()){
      const docData = docSnapshot.data();
      console.log(`My doc data ${JSON.stringify(docData)}`);
    }
  });
}

async function cancelListenerSubscribe(){
  specialOfTheDayUnSubscribe();
}

async function queryDocument(){
  const dailySpecialQuery = query(
    collection(firestore, 'dailyspecial'), 
    where('events', '==', false),
    orderBy('priority')
  );
  const querySnapshot = await getDocs(dailySpecialQuery);
  console.log(JSON.stringify(querySnapshot.docs.map(doc => doc.data())));
}

//addNewDoc();
//getSingleDoc();
//listenToDocument();
/*setTimeout(()=>{
  cancelListenerSubscribe();
}, 10000);*/
queryDocument();
console.log('Hello World!, firestore check');