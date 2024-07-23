const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("This is resolved!")
    },2000);
});
promise1.then((msg)=>{
    console.log(msg);
})


const promise2 = new Promise((_,reject)=>{
    setTimeout(()=>{
        reject(new Error("This is reject!"));
    },2000);
})
promise2.catch((msg)=>{
    console.log(msg);
})


function fetchData1(){
    return new Promise((resolve)=>{
        console.log("Fetched data from server 1");
        resolve("Data 1");
    },1000);
}
function fetchData2(){
    return new Promise((resolve)=>{
        console.log("Fetched data from server 2");
        resolve("Data 2");
    },2000);
}
function fetchData3(){
    return new Promise((resolve)=>{
        console.log("Fetched data from server 3");
        resolve("Data 3");
    },1500);
}
fetchData1()
        .then((data1)=>{
            console.log("Processing: " + data1);
            return fetchData2();
        })
        .then((data2)=>{
            console.log("Processing : "+ data2);
            return fetchData3();
        })
        .then((data3)=>{
            console.log("Processing : "+ data3);
            console.log("All data fetched and processed.");
        })
        .catch((error)=>{
            console.error("An error occured :"+ error.message);
        })


async function func1(){
    const promise3 = new Promise((resolve)=>{
        setTimeout(() => {
            resolve("This is resolve async function");
        }, 2000);
    });

    try {
        let resolved = await promise3;
        console.log(resolved);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
func1();


async function func2(){
    const promise4 = new Promise((_,reject)=>{
        setTimeout(() => {
            reject("This is reject async function");
        }, 2000);
    });

    try {
        let rejected = await promise4;
        console.log(rejected);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
func2();

const url = "https://api.github.com/users/RishiRaj0712";

fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.error("There was a problem with the fetch operation:", error);
    })

async function func3(){

    try {
        let response = await fetch(url);
        if(!response.ok)throw new error("Network response was not ok " + response.statusText);

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}
func3();

Promise.all([fetchData1(),fetchData2(),fetchData3()])
    .then((value)=>{
        console.log("all promise resolved");
        console.log(value);
    })
    .catch((error)=>{
        console.error("An error occurred:", error);
    })



function fetchData4(){
    return new Promise((resolve)=>{
        console.log("Fetched data from server 4");
        resolve("Data 4");
    },3000);
}
function fetchData5(){
    return new Promise((resolve)=>{
        console.log("Fetched data from server 5");
        resolve("Data 5");
    },2000);
}
function fetchData6(){
    return new Promise((resolve)=>{
        console.log("Fetched data from server 6");
        resolve("Data 6");
    },1000);
}
Promise.race([fetchData4(), fetchData5(), fetchData6()])
    .then((value) => {
        console.log("First promise resolved:");
        console.log(value);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });



// OUTPUT
// Fetched data from server 1
// Fetched data from server 1
// Fetched data from server 2
// Fetched data from server 3
// Fetched data from server 4
// Fetched data from server 5
// Fetched data from server 6
// Processing: Data 1
// Fetched data from server 2
// all promise resolved
// [ 'Data 1', 'Data 2', 'Data 3' ]
// First promise resolved:
// Data 4
// Processing : Data 2
// Fetched data from server 3
// Processing : Data 3
// All data fetched and processed.
// {
//   login: 'RishiRaj0712',
//   id: 83121561,
//   node_id: 'MDQ6VXNlcjgzMTIxNTYx',
//   avatar_url: 'https://avatars.githubusercontent.com/u/83121561?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/RishiRaj0712',
//   html_url: 'https://github.com/RishiRaj0712',
//   followers_url: 'https://api.github.com/users/RishiRaj0712/followers',
//   following_url: 'https://api.github.com/users/RishiRaj0712/following{/other_user}',
//   gists_url: 'https://api.github.com/users/RishiRaj0712/gists{/gist_id}',
//   starred_url: 'https://api.github.com/users/RishiRaj0712/starred{/owner}{/repo}',
//   subscriptions_url: 'https://api.github.com/users/RishiRaj0712/subscriptions',
//   organizations_url: 'https://api.github.com/users/RishiRaj0712/orgs',
//   repos_url: 'https://api.github.com/users/RishiRaj0712/repos',
//   events_url: 'https://api.github.com/users/RishiRaj0712/events{/privacy}',
//   received_events_url: 'https://api.github.com/users/RishiRaj0712/received_events',
//   type: 'User',
//   site_admin: false,
//   name: 'rishi_r01',
//   company: 'IIT Roorkee',
//   blog: 'https://rishi-portfolio-rust.vercel.app/',
//   location: 'Roorkee, Uttarakhand',
//   email: null,
//   hireable: null,
//   bio: 'Pre-Final year Undergraduate at IIT Roorkee. \r\n' +
//     'Major in Applied Mathematics',
//   twitter_username: null,
//   public_repos: 10,
//   public_gists: 0,
//   followers: 4,
//   following: 9,
//   created_at: '2021-04-24T11:59:34Z',
//   updated_at: '2024-04-08T19:19:46Z'
// }
// {
//   login: 'RishiRaj0712',
//   id: 83121561,
//   node_id: 'MDQ6VXNlcjgzMTIxNTYx',
//   avatar_url: 'https://avatars.githubusercontent.com/u/83121561?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/RishiRaj0712',
//   html_url: 'https://github.com/RishiRaj0712',
//   followers_url: 'https://api.github.com/users/RishiRaj0712/followers',
//   following_url: 'https://api.github.com/users/RishiRaj0712/following{/other_user}',
//   gists_url: 'https://api.github.com/users/RishiRaj0712/gists{/gist_id}',
//   starred_url: 'https://api.github.com/users/RishiRaj0712/starred{/owner}{/repo}',
//   subscriptions_url: 'https://api.github.com/users/RishiRaj0712/subscriptions',
//   organizations_url: 'https://api.github.com/users/RishiRaj0712/orgs',
//   repos_url: 'https://api.github.com/users/RishiRaj0712/repos',
//   events_url: 'https://api.github.com/users/RishiRaj0712/events{/privacy}',
//   received_events_url: 'https://api.github.com/users/RishiRaj0712/received_events',
//   type: 'User',
//   site_admin: false,
//   name: 'rishi_r01',
//   company: 'IIT Roorkee',
//   blog: 'https://rishi-portfolio-rust.vercel.app/',
//   location: 'Roorkee, Uttarakhand',
//   email: null,
//   hireable: null,
//   bio: 'Pre-Final year Undergraduate at IIT Roorkee. \r\n' +
//     'Major in Applied Mathematics',
//   twitter_username: null,
//   public_repos: 10,
//   public_gists: 0,
//   followers: 4,
//   following: 9,
//   created_at: '2021-04-24T11:59:34Z',
//   updated_at: '2024-04-08T19:19:46Z'
// }
// This is resolved!
// Error: This is reject!
//     at Timeout._onTimeout (/Users/rishi/Documents/workdir/30days_JS_challenge/task11.js:13:16)
//     at listOnTimeout (node:internal/timers:573:17)
//     at process.processTimers (node:internal/timers:514:7)
// This is resolve async function
// An error occurred: This is reject async function