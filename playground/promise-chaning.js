require('../src/db/mongoose')
const User = require('../src/models/user')

//614ac562c7118e304d8fb8ff


// User.findByIdAndUpdate('614ac56ea2b0186079aaf5ca', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => { 
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}


updateAgeAndCount('614ac56ea2b0186079aaf5ca', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})