// 15 - Elabore um programa que receba três valores como entrada e mostre eles
// em ordem crescente no console.

let v1 = 0
let v2 = 0
let v3 = 0

function order(v1, v2, v3) {
  if (v1 <= v2 && v1 <= v3) {
    if (v2 <= v3) {
      return `${v1} | ${v2} | ${v3}`
    } else {
      return `${v1} | ${v3} | ${v2}`
    }
  } else if (v2 <= v1 && v2 <= v3) {
    if (v1 <= v3) {
      return `${v2} | ${v1} | ${v3}`
    } else {
      return `${v2} | ${v3} | ${v1}`
    }
  } else if (v3 <= v1 && v3 <= v2) {
    if (v1 <= v2) {
      return `${v3} | ${v1} | ${v2}`
    } else {
      return `${v3} | ${v2} | ${v1}`
    }
  }
}

const result = order(200, 1, -20)
console.log(result)
