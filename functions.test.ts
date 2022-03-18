const {shuffleArray} = require('./utils')
 let arr = [1, 2, 3, 4, 5, 6]
describe('shuffleArray should', () => {
    test('have the same length', ()=> {
        expect(shuffleArray(arr)).toHaveLength(6)
    })

    test('should  shuffle the array', ()=>{
        expect(shuffleArray(arr)).not.toBe(arr)
    })
})