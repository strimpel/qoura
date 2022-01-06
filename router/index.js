const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();

router.use(express.urlencoded({
    extended: true
  })) 

const db = 
{
    "articles": [{
        "id": 0,
        "title": "article test 1",
        "body": "article body test 1",
        "comments": [
        {
            "id": 0,
            "title": "comment title test",
            "body": "comment test 1"
        },
        {
            "id": 1,
            "title": "comment title test",
            "body": "comment test 2"
        },
        {
            "id": 2,
            "title": "comment title test",
            "body": "comment test 3"
        },
        {
            "id": 3,
            "title": "comment title test",
            "body": "comment test 4"
        }
    
        ]
    },
    {
        "id": 0,
        "title": "article test 2",
        "body": "article body test",
        "comments": [
            {
                "id": 0,
                "title": "comment title test",
                "body": "comment test 1"
            },
            {
                "id": 1,
                "title": "comment title test",
                "body": "comment test 2"
            },
            {
                "id": 2,
                "title": "comment title test",
                "body": "comment test 3"
            },
            {
                "id": 3,
                "title": "comment title test",
                "body": "comment test 4"
            }
    
        ]
    }]
}

router.get('/' , (req,res) => {
    res.json(db)
} )


router.post('/', (req,res) => {

    const id = req.body.id;
    const name = req.body.name;
    const message = req.body.message;
    console.log("id="+ id + " name=" + name + " message= " + message)
    

    db.articles[id].comments.push(
        {
            id: db.articles[id].comments.length,
            title: name,
            body: message
        }
    )
    res.json(db)
})


module.exports = router ;