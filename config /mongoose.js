const mongoose =require('mongoose')


mongoose.connect('mongodb+srv://feacbook:Feacbook@cluster0.l0tb7.mongodb.net/?retryWrites=true&w=majority')
          .then( ()=> {
            console.log('conect to db')
          })
          .catch( err => {
            console.log('err2')
          })


         