const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Martin',
    //   age: 30
    // });
    reject('Something went wrong!');
  }, 5000);
});

console.log('Before');

promise.then((data) => {
  console.log('1 ', data);
}).catch(error => {
  console.log('Error: ', error);
});

console.log('After');
