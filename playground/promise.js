var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, it worked!')
    reject('unable to fullfill promise')
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success:', message)
}, (errorMessage) => {
  console.log('ERROR:',errorMessage)
})