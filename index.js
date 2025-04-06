const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...")

post.addComment("Lucas Lorran", "muito bom!")
post.addComment("Isaac", "interessante")

console.log(john)
console.log(post)