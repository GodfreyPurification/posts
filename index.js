//dummy data

// const posts=[
//     {
//         title: "this os title1",
//         body: "this is body 1"
//     },
//     {
//         title: "this os title2",
//         body: "this is body 2"
//     },
//     {
//         title: "this os title3",
//         body: "this is body 3"
//     },
//     {
//         title: "this os title4",
//         body: "this is body 4"
//     },
//     {
//         title: "this os title5",
//         body: "this is body 5"
//     },
//     {
//         title: "this os title6",
//         body: "this is body 6"
//     },
//     {
//         title: "this os title7",
//         body: "this is body 7"
//     },
//     {
//         title: "this os title8",
//         body: "this is body 8"
//     }
    
// ];

//fetch

const fetchData= async(config)=>{
    try{
        const res=await axios(config);
        return res.data;
    }catch(error){
        throw Error("data is not fetchd");
        
    }
    
};



//         <div class="post">
//             <h4 class="post-title">post title 1</h4>
//             <p class="post-body">post description 1</p>
//         </div>


//selection 

const PostsElement=document.querySelector(".posts");

const loadAllData= async()=>{
    const posts= await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        const PostElement=document.createElement("div");
        PostElement.classList.add("post");
        PostElement.innerHTML=`
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
            `;
            PostsElement.appendChild(PostElement);
    });
    
};

loadAllData();
// https://www.youtube.com/watch?v=j2J1dUGnfmI&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=90