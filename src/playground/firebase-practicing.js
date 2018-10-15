 //child_added - gets called for each child that exists already, and any child that is added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // //child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });


  //change database data into an array
  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });



  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });

  //     console.log(expenses);
  //   });

  // setup expenses with 3 items (description, note, amount(number), createdAt(number))
// database.ref('expenses').push({
//   description: 'golf clubs',
//   note: '',
//   amount: 195000,
//   createdAt: 2000000000
// });

// database.ref('expenses').push({
//   description: 'video game',
//   note: '',
//   amount: 4000,
//   createdAt: 2002000000
// });

// database.ref('expenses').push({
//   description: 'coffee',
//   note: '',
//   amount: 350,
//   createdAt: 2004000000
// });


  // when using push, firebase creates a unique (and long!) id for the new child
  // database.ref('notes').push({
  //   title: 'To do',
  //   body: 'Go for a run'
  // });

  //setup data subscription -> Andrew is a Software Developer at Amazon.
  //change data and make sure it reprints.

  //
  // const onChange = database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });

  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // }, (error) => {
  //   console.log('Error with data fetching', error);
  // });

  // setTimeout(() => {
  //   database.ref('age').set(29);
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(30);
  // }, 10500);

  // //basic fetch
  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });

  // //set
  // database.ref().set({
  //   name: "Christopher Barclay",
  //   age: 31,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //       city: 'San Diego',
  //       country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((error) => {
  //   console.log('This failed.', error);
  // });

  // //update
  // database.ref().update({
  //   name: 'Different Guy',
  //   age: 40,
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });

  // //remove
  // // database.ref('isSingle').remove().then(() => {
  // //   console.log('remove successfully saved');
  // // }).catch((error) => {
  // //   console.log('remove failed. did not save. ', error);
  // // });