// Task 4: delUser(number)
export function delUser(number){
    const aydreik = 'http://localhost:3000/users/' + number; 
    fetch(aydreik,{
        method: 'DELETE',
}) .then(respuesta => respuesta.json())
.then(datos => console.log(datos))
}
