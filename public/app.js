// form id: burgerForm
// burger input id: burgerName
// submit button id: addBtn
// all burgers div id: allBurgers
// devoured burgers div id: devouredBurgers

axios.get('/burgers')
    .then(function (r) {
        console.log(r.data)
        if(r.data !== []) {
            r.data.forEach(burger => {
                const newBurger = `
                <tr class="burger" data-burgerid="${burger.id}" data-devoured="${burger.devoured}">
                <th scope="row">${burger.id}</th>
                <td class="burger" data-burgerid="${burger.id}" data-devoured="${burger.devoured}">${burger.name}</td>
                <td class="burger" data-burgerid="${burger.id}" data-devoured="${burger.devoured}">${burger.devoured}</td>
                </tr>
                `
                document.getElementById('burgerTable').innerHTML += newBurger
            })
        }
    })
    .catch(e => console.error(e))

document.getElementById('addBtn').addEventListener('click', e => {
    e.preventDefault()
    let burger = {
        name: document.getElementById('burgerName').value,
        devoured: false
    }
    axios.post('/burgers', burger)
        .then(() => {
            window.location.reload()
        })
        .catch(e => console.error(e))
})

document.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.className === 'burger') {
        console.log(e.target.dataset.devoured)
        console.log(e.target.dataset.burgerid)
        axios.put(`/burgers/${e.target.dataset.burgerid}`, {
            devoured: e.target.dataset.devoured === 'false' ? true : false
        })
            .then(() => {
                window.location.reload()
            })
            .catch(e => console.error(e))
    }
})