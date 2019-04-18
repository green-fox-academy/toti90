`use strict`
export{}

// Reuse your BlogPost class
//  Create a Blog class which can
//    store a list of BlogPosts
//    add BlogPosts to the list
//    delete(int) one item at given index
//    update(int, BlogPost) one item at the given index and update it with another BlogPost


import { BlogPost } from './blog-post'

class Blog {
  posts: BlogPost[];

  constructor(posts:BlogPost[]) {
    this.posts = posts
  }

  delete(index:number) {
    this.posts.splice(index,1)
    return this.posts
  }

  update(index:number, post:BlogPost) {
    this.posts[index].text = post.text
    this.posts[index].title = post.title
    this.posts[index].publicationDate = post.publicationDate
    this.posts[index].authorName = post.authorName
  }

}

let blogPost1 = new BlogPost("John Doe", "Lorem Ipsum", `Lorem ipsum dolor sit amet.`, "2000.05.04.")
let blogPost2 = new BlogPost("Tim Urban", "Wait but why", `A popular long-form, stick-figure-illustrated blog about almost everything.`, "2010.10.10.")
let blog1 = new Blog([blogPost1,blogPost2])
console.log(blog1.posts);
blog1.delete(0)
console.log(blog1.posts);
let blogPost3 = new BlogPost("Tamás Tóth", "Lorem Ipsum", `No text`, "2019.04.18.")
blog1.update(0, blogPost3)
console.log(blog1.posts);


