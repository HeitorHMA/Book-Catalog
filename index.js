function catalog(name, author, pages ,read){
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function()
    {
        console.log(`${name} by ${author} has ${pages} pages and is ${read}`)
    }
    if (read == false){
        read = "not read yet"
    }
    else if (read == true) {
        read = "alredy read"
    }
    return(`${name} by ${author} has ${pages} pages and is ${read}`)
}

let theHobbit = new catalog("The Hobbit", "Tolkien" , "256" , false)
console.log(theHobbit.info())
