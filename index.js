
function submit1(event) {
    event.preventDefault();
    let a = {
        firstName: document.getElementById('FirstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('Email').value
    }
    axios.post('https://crudcrud.com/api/8d3b0a7f6413476da3ede088eb3553a4/data', a).then((res) => {
        console.log(res);
    })


}


window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/8d3b0a7f6413476da3ede088eb3553a4/data').then((res) => {
        console.log(res.data);


        for (let i = 0; i < res.data.length; i++) {
            const parent = document.getElementById('listOfItems')
            const child = document.createElement('li')
            var btn = document.createElement('button')

            child.textContent = res.data[i].firstName + "-" + res.data[i].lastName + "-" + res.data[i].email;
            btn.appendChild(document.createTextNode('Delete'))
            btn.onclick = (() => {
                console.log(res.data[i]._id);
                axios.delete(`https://crudcrud.com/api/8d3b0a7f6413476da3ede088eb3553a4/data/${res.data[i]._id}`).then(() => {
                    document.location.reload();
                })

            })
            var btn1 = document.createElement('button')
            btn1.appendChild(document.createTextNode('EDIT'))
            btn1.onclick = (() => {
                axios.get(`https://crudcrud.com/api/8d3b0a7f6413476da3ede088eb3553a4/data/${res.data[i]._id}`).then((data) => {
                    console.log(data);
                    document.getElementById('FirstName').value = data.data.firstName;
                    document.getElementById('lastName').value = data.data.lastName;
                    document.getElementById('Email').value = data.data.email;

                    let b = {
                        firstName: document.getElementById('FirstName').value,
                        lastName: document.getElementById('lastName').value,
                        email: document.getElementById('Email').value
                    }
                    axios.delete(`https://crudcrud.com/api/8d3b0a7f6413476da3ede088eb3553a4/data/${data.data[i]._id}`).then(() => {

                        
                    })

                    axios.post(`https://crudcrud.com/api/8d3b0a7f6413476da3ede088eb3553a4/data`, b).then(() => {

                        })


                    

                })

            })
            child.appendChild(btn1)
            child.appendChild(btn);
            parent.appendChild(child);
        }
    })
})




