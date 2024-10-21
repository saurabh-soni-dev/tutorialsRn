const arr = [
    {
        "name": "Dune",
        "author": "Frank Herbert",
        "year": "1965"
    },
    {
        "name": "Foundation",
        "author": "Isaac Asimov",
        "year": "1951"
    },
    {
        "name": "1984",
        "author": "George Orwell",
        "year": "1949"
    },
    {
        "name": "Brave New World",
        "author": "Aldous Huxley",
        "year": "1932"
    },
    {
        "name": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "year": "1979"
    },
    {
        "name": "Neuromancer",
        "author": "William Gibson",
        "year": "1984"
    },
    {
        "name": "Ender's Game",
        "author": "Orson Scott Card",
        "year": "1985"
    },
    {
        "name": "The War of the Worlds",
        "author": "H.G. Wells",
        "year": "1898"
    },
    {
        "name": "Snow Crash",
        "author": "Neal Stephenson",
        "year": "1992"
    },
    {
        "name": "The Handmaid's Tale",
        "author": "Margaret Atwood",
        "year": "1985"
    }
]

const printName = () => {
    arr.map((item, index) => {
        console.log("The", item.name, "passing year of", item.year);
    })
}
printName();
