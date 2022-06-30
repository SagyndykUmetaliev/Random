const user = 'https://randomuser.me/api/?results='
let message = document.querySelector('#message')
 
const requestAPI = () =>{
  new Promise ((resolve,reject)=>{
    resolve(fetch(user+message.value))
    reject('ERROR IN API')
}).then(response => {
   response.json()
   .then (json=>random(json.results))
},error =>{
    console.log(error)
})
}


const random = (api) =>{
    

    const output = document.querySelector('#output')
    output.innerHTML=''
     console.log(api)
     api && api.map(el=>{
       
        button.textContent='Click'
        const card = document.createElement('div')
        card.className='card'
        const name = document.createElement('p')
        name.textContent = el.name.first
        const img = document.createElement('img')
        img.src = el.picture.large

        card.append(name,img)
        output.append(card)
     })
}


const button = document.querySelector('button')
button.addEventListener('click',()=>{
    requestAPI()
})


                