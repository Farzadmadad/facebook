const { render } = require('ejs')
const { post } = require('../config /router')
const {Feed}=require('../models/Feed')



const getHomepage=(req,res)=> {
   Feed.find().sort({created_at:-1})
    .then(result=>
        res.render('index',{result})
    )
        
    .catch(err=> console.log(err))
    
}
const newPost=(req,res)=>{
    
    if(req.method==='GET'){
        res.render('addPost',{err:false})
    }
    if(req.method==='POST'){
        console.log(req.body)
        const post =new Feed(req.body)
        post.save()
        .then(result => res.redirect('/'))
        
        .catch(err=>res.render('addPost',{err:err.errors}))
           
            

            
       
    }
    
}
const showOnePost=(req,res)=>{
    Feed.findById({_id:req.params.id})
    .then(result=>{
        console.log(result)
        res.render('showOne',{result})
    }
        
    )
        
    .catch(err=> console.log('err1'))
  
        
   
   
    
}
const updateOnePost=(req,res)=>{
    if(req.method==='GET'){
        Feed.findById({_id: req.params.id})
    .then(result=>{
        console.log(result)
        res.render('editPost',{result})
    }
   
       
    )
        
    .catch(err=> console.log('err1'))
        
    }
    
    if(req.method==='POST'){
        Feed.findByIdAndUpdate({_id:req.params.id})
        .then(result=>{
            result.title=req.body.title
            result.post=req.body.post
            result.save()
            .then(()=>
                res.redirect('/'))
                .catch(err=> console.log('err'))
        
            }
        )
    
            .catch(err=> console.log('err1'))
        }
    }
        
   
   const deleteOnePost=(req,res)=>{
       Feed.findByIdAndDelete({_id:req.params.id})
       .then(result=>res.redirect('/'))
       .catch(err=> console.log('err1'))
   }
    


module.exports={
    getHomepage,
    newPost,
    showOnePost,
    updateOnePost,
    deleteOnePost,
  
}


