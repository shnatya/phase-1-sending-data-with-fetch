// Add your code here
function submitData(nameUser, emailUser) {
    return fetch("http://localhost:3000/users", {
                 method: "POST",
                 headers: {
                     "Content-Type": 'application/json',
                     Accept: "application/json"
                 },
                 body: JSON.stringify({
                     name: nameUser,
                     email: emailUser,
                 })
    })
            .then(res => res.json())
            .then(data => {
                let id = document.createElement("h2")
                id.textContent = data.id
                document.body.appendChild(id)
                
            })
            .catch(error => {
                let er = document.createElement("h2")
                er.textContent = error.message
                document.body.appendChild(er)
            }
                )
            
            
}