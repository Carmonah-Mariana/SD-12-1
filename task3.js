// Task 3: addUser(first_name, last_name, email)

export function addUser(primer_nombte, apellido, correo_electronico){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id : 6,
            first_name: primer_nombte,
            last_name: apellido,
            email: correo_electronico
        }),

    })
}

 

