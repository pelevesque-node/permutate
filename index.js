'use strict'

const permutater = require('permutater')
const sortString = require('@pelevesque/sort-string')
const arrayUniq = require('array-uniq')

module.exports = (obj) => {
  let permutations = permutater(obj)
  if (obj.unique) {
    for (let i = 0; i < permutations.length; i++) {
      permutations[i] = sortString(permutations[i])
    }
    permutations = arrayUniq(permutations)
  }
  return permutations
}
