const fs = require('fs')
const c = require('chalk')
const getNotes = () =>{
    return 'Your Notes...'
}

const addNotes = function(title,body) {
    const notes = loadNotes()
    const duplicatenotes = notes.filter(function(note){
       return note.title === title
    })
    const duplicatenote = notes.find((note)=> note.title===title)
    if (!duplicatenote){

        notes.push({
            title:title,
            body:body
           })
           saveNotes(notes)
        console.log('Notes Added')
    }

    else{
        console.log('No title taken')
        }

         
}

const readNotes = (title) =>{
    const  notes = loadNotes()
    const matched = notes.find((note) => note.title === title)
    debugger
    if(matched){
        console.log(c.bold("Title :"+matched.title)+"  Body : "+matched.body)
    }
    else{
        console.log(c.red('No Note Found'))
    }
}


const saveNotes = function(note) {
    const JSONdata = JSON.stringify(note)
    fs.writeFileSync('notes.json',JSONdata)
}
const loadNotes = function() {
    try{
    const databuffer = fs.readFileSync('notes.json')
    const data = JSON.parse(databuffer.toString())
    return data
    }
    catch(e){
        return []
    }
}
const removeNotes = function(title){
        const data = loadNotes()
        const samenote = data.filter(function(note){
            return note.title !== title
        })
       
        
        if(data.length == samenote.length){
            console.log(c.red.inverse('No node found'))
        }
        else{
        saveNotes(samenote)
        console.log(c.green.inverse('Node Removed'))
        }
}
const listnotes = () => {
    const  data = loadNotes()
    console.log(c.bold.blueBright('Your Notes'))
    data.forEach((item)=>{
        console.log('Title : '+item.title)
    })
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    listnotes: listnotes,
    removeNotes:removeNotes,
    readNotes:readNotes,
}