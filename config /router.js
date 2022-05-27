const express =require('express')
const router=express.Router()
const controller =require('../controller/controller')



router.get('/',controller.getHomepage)
router.all('/add-article',controller.newPost)
router.get('/article/:id',controller.showOnePost)
router.all('/edit-article/:id',controller.updateOnePost)
router.get('/delete-post/:id',controller.deleteOnePost)



module.exports=router