const login = [
    {
        username: "flipkart",
        password: "welcome"
    },
    {
        username: "google",
        password: "hello123"
    },
    {
        username: "facebook",
        password: "comeon"
    },
    {
        username: "amazon",
        password: "goodtext"
    },
];
//event listeners
let form = document.querySelector('form').addEventListener('submit', getInfo);

function getInfo(e){
    e.preventDefault();
    // DOM events
let p =document.querySelector('p');
let users = document.querySelector('#user');
let passs = document.querySelector('#pass');
   for (let i = 0; i < login.length; i++) {
        if(login[i].username === users.value && login[i].password === passs.value){
            p.innerHTML = "Logged-in";
            p.className = 'success';
            clearData(users, passs,p);
            return
        } 
    }
    p.innerHTML = "Wrong username or password!";
    p.className = 'failure';
    clearData(user, pass,p);
}
    function clearData(user, pass,p){
        user.value = "";
        pass.value = "";
        setTimeout(()=>{
        p.innerHTML = "";
        p.className = '';
        },3000);
    }
