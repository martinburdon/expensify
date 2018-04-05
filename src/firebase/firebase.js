import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDrc84lfBnkO2LMO1qu1iyNBdYEyBZGtmc",
  authDomain: "expensify-d6cc1.firebaseapp.com",
  databaseURL: "https://expensify-d6cc1.firebaseio.com",
  projectId: "expensify-d6cc1",
  storageBucket: "expensify-d6cc1.appspot.com",
  messagingSenderId: "933995871732"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/**
 * Helper funcs
 */
// child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

/**
 * Add our object/array hybrid to an array, getting ID and spreading the rest of the data
 */
// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//
//     console.log(expenses);
//   }, error => {
//     console.log('Error ', error);
//   });

/**
 * Push new items when using array like data, this will generate unique ID as key and add data
 */
// database.ref('expenses').push({
//   description: 'Cake mix',
//   note: 'To make this weekends cakes',
//   amount: 300,
//   createdAt: 360030
// });

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref('notes/-L2gKeguhPUbbx4tpBd8').remove();

/**
 * Subscribing to changes in the database and unsubscribing
 */
// const onValueChange = database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, error => {
//   console.log('Error fetching data ', error);
// });
//
// setTimeout(() => {
//   database.ref('job/company').set('Leo Vegas');
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

/**
 * Fetch specific data one time
 */
// database.ref('location')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => {
//     console.log('Error fetching data ', error);
//   });

/**
 * Setting data
 */
// database.ref().set({
//   name: 'Martin Burdon',
//   age: 30,
//   stressLevel: 5,
//   job: {
//     title: 'Software Developer',
//     company: 'Bede'
//   },
//   location: {
//     city: 'Sunderland',
//     country: 'England'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch(error => {
//   console.log('Error saving data: ', error);
// });

/**
 * Set multiple pieces of data
 */
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Leo Vegas',
//   'location/city': 'Stockholm',
//   'location/country': 'Sweden'
// });

/**
 * Remove/manipulate single specific piece of data
 */
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle has been removed');
//   }).catch(error => {
//     console.log('Error removing isSingle: ', error.message);
//   });
