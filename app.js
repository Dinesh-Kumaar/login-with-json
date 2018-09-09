// const login = [
//     {
//         username: "flipkart",
//         password: "welcome"
//     },
//     {
//         username: "google",
//         password: "hello123"
//     },
//     {
//         username: "facebook",
//         password: "comeon"
//     },
//     {
//         username: "amazon",
//         password: "goodtext"
//     },
// ];
async function jsonData(){
    const response = await fetch('login.json');
    const data = response.json();
    return data;
}
//event listeners
let form = document.querySelector('form').addEventListener('submit', getInfo);

function getInfo(e){
    e.preventDefault();
    // DOM events
let p =document.querySelector('p');
let users = document.querySelector('#user');
let passs = document.querySelector('#pass');
// JSON File
jsonData()
    .then(res => {
        for (let i = 0; i < res.length; i++) {
            if(res[i].username === users.value && res[i].password === passs.value){
                p.innerHTML = "Logged-in";
                p.className = 'success';
                clearData(users, passs,p);
                return
            } 
        }
        p.innerHTML = "Wrong username or password!";
        p.className = 'failure';
        user.focus();
        clearData(user, pass,p);
    })
    .catch(err => console.log(err))
//Working to validate JSON data
   
}
    function clearData(user, pass,p){
        user.value = "";
        pass.value = "";
        setTimeout(()=>{
        p.innerHTML = "";
        p.className = '';
        },3000);
    }
