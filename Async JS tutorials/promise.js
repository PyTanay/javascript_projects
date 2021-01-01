const posts=[
    {title:'Post One',body:'This is post one!'},
    {title:'Post Two',body:'This is post two!'},
]

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+= `<li>${post.title}</li>`
        })
        document.body.innerHTML=output;
    },1000)
}

function createPost(post){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            posts.push(post)
            var error=false;
            if(!error){
                res();
            }else{
                rej("Something went wrong!!")
            }
        },1000)
    })
}

createPost({title:'Post Three',body:'This is post three!'}).then(getPosts).catch(err=>{
    document.body.innerHTML=err;
})

const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((res,rej)=>{
    setTimeout(res,5000,'Goodbye')
})
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
Promise.all([promise1,promise2,promise3,promise4]).then(values=>{
    let output='';
    values[3].forEach(user=>{output+= `<li>${user.name}</li>`})
    document.body.innerHTML=output;
    console.log(values)
})