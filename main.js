const state ={
    user: {},
}
myHeaders = 'content-type'
function listUser(number){
    const init = {
        method:'GET',
        body:'Content,Type',
    }
    if (number == 1) {
        fetch('https://reqres.in/api/users?page=1')
        .then(res => res.json())
        .then(res => {
            user = res.user
            console.log(res)
        })
        .catch(error => console.error(error))
    }
    if(number == 2){
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
        }
}

function singleUser(id){
    const init = {
        method:'get'
    }
    if (id == 1) {
    fetch('https://reqres.in/api/users?page=1',init)
    .then(res => res.json())
    .then(res =>console.log(res))
    .catch(Error => console.log(Error))
    }
    if (id == 2) {
        fetch('https://reqres.in/api/users?page=2',init)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
}

//register
function register(){
    dataTosend ={
        name:prompt('enter your name',state.user),
        email:prompt('enter you email'),
        job:prompt('enter your job'),
        password:prompt('enter your password')
    }
    const init = {
        method:'post',
        headers:myHeaders,
        body:JSON.stringify
    }
    fetch('https://reqres.in/api/register',init)
    .then(res => res.json())
    .then(res =>{
        state.user = res.user
        console.log(res)
    })
    .catch(error => console.log(error))
}

// post create
function creat(){
    const dataTosend ={
        name:prompt('enter you name',state.user),
        job:prompt('enter your job')
    }
    const init = {
        method:'post',
        body:'Content-Type'
    }
    fetch()
}

// delete
function hapus(){
    myHeadersPrivate = new headers('Authorization',`Bearer${state.user}`)
    myHeadersPrivate.append()
    const init ={
        method:'delete',
        headers:myHeadersPrivate
    }
}