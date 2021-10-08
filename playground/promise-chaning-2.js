require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('614ac851b521b79404c4b934').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result, ' incompleted tasks has left')
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('614b1a44aa30528426b3a4de').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
