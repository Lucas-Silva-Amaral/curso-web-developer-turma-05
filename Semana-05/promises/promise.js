export const promise = new Promise((resolve, reject) => {
  const sting1 = "otterwise"
  const sting2 = "otterwise"
  if (sting1 === sting2) {
    setTimeout(() => {
      resolve("Success!")
    }, 300)
  } else {
    setTimeout(() => {
      reject("Error!")
    }, 300)
  }
})
