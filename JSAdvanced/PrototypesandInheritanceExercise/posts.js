function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let g = ""
            g +=`Post: ${this.title}\n`;
            g += `Content: ${this.content}\n`;
            if (this.likes && this.dislikes && this.comments) {
                g += `Rating: ${this.likes - this.dislikes}\n`;
                if (this.comments.length > 0) {
                    g += `Comments:\n`;
                    for (let i of this.comments) {
                        g += ` * ${i}\n`;
                    }
                }
            }
            if (this.views) {
                g += `Views: ${this.views}\n`;
            }
            return g.trim();
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = []

        }
        addComment(str){
            this.comments.push(str);
        }


    }
    
    class BlogPost extends Post {
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
        }
    }



    return {
        Post,
        SocialMediaPost,
        BlogPost
    }




}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
