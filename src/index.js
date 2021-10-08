const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const main = async () => {
//     // const task = await Task.findById('6157e078d15d05f8d4bbe280')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6157e00f40ae7d92c8ff7ace').populate('tasks')
//     // await user.populate('tasks').populate()
//     console.log(user.tasks)
// }

// main()