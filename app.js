// const fs = require('fs')
// fs.writeFileSync('notes.txt','My name is Tarang')
// fs.appendFileSync('notes1.txt','I live in jabalpur')
//overwrites the content each time we run this

//const na = require('./utils.js')
// Console.log(na(3,4))
const validator = require('validator')  
const c = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')



// console.log(notes())
// console.log(validator.isEmail('tarangkhetan@giiitdmj.ac.in'))

// console.log(c.cyan.inverse.bold('Tarang'),c.blueBright.italic.underline('success!!'))
// console.log(c.green.bold(notes()))

// const log = console.log
// // Pass in multiple arguments
// log(c.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// // Nest styles
// log(c.red('Hello', c.underline.bgBlue('world') + '!'));

// const command = process.argv[2]
// console.log(process.argv)
// if(command === 'add')
// {
//     console.log('Adding '+notes())
// }
// else if(command =='remove')
// {

//     console.log('Removing '+notes())
// }

// customize yargs version
yargs.version('1.1.0')


yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'addition',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:"It's Body",
            demandOption:true,
            type:'string',
        }
    },
    handler: function (argv){
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Removing a new notes',
    builder:{
        title:{
            demandOption:true
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'Listing a new notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            default:'hello',
            type:'string',
        }
    },
    handler(argv){
        notes.listnotes()
    }
})

yargs.command({
    command:'read',
    describe:'Reading a new node',
    builder:{
        title:{
            describe:"read a file",
            demandOption:true,
            tpye:'string',
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})
yargs.parse() //only parsing (necessary)
// console.log(process.argv)   parsing also and printing
// console.log(yargs.argv)
