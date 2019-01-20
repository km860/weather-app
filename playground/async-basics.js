console.log('Starting app...')

setTimeout(() => {
  console.log('Inside of callback')
}, 2000)

setTimeout(() => {
  console.log('2nd setTimeout')
}, 0)

console.log('4...')
setTimeout(() => {
  console.log('3rd setTimeout')
}, 0)
console.log('5...')
console.log('Finishing up...')