
function submit1(event) {
    event.preventDefault();
    let a = {
        firstName: document.getElementById('FirstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('Email').value
    }
    axios.post('https://crudcrud.com/api/153c27c126644367ad7a94ff6a6ea000/data', a).then((res) => {
        console.log(res);
    })


}


window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/153c27c126644367ad7a94ff6a6ea000/data').then((res) => {
        console.log(res.data);


        for (let i = 0; i < res.data.length; i++) {
            const parent = document.getElementById('listOfItems')
            const child = document.createElement('li')
            var btn = document.createElement('button')

            child.textContent = res.data[i].firstName + "-" + res.data[i].lastName + "-" + res.data[i].email;
            btn.appendChild(document.createTextNode('Delete'))
            btn.onclick=(()=>{
                console.log(res.data[i]._id);
                axios.delete(`https://crudcrud.com/api/153c27c126644367ad7a94ff6a6ea000/data/${res.data[i]._id}`)
                document.location.reload();
            })
            var btn1 = document.createElement('button')
            btn1.appendChild(document.createTextNode('EDIT'))
            child.appendChild(btn1)
            child.appendChild(btn);
            parent.appendChild(child);
        }
    })
})




