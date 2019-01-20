var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 1500);
  })
}
asyncAdd(2, 3).then((res) => {
  console.log('result:', res)
  return asyncAdd(res, 33)
}).then((res) => {
  console.log('Should be', res)
}).catch((error) => {
  console.log(error)
})
/* var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, it worked!')
    reject('unable to fullfill promise')
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success:', message)
}, (errorMessage) => {
  console.log('ERROR:',errorMessage)
}) */