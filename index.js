function submitData(input1, input2){
    let obj = {
        name: input1,
        email: input2
    }
    const configurationObject = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:JSON.stringify(obj)
      }
    return fetch ('http://localhost:3000/users',configurationObject)
    .then(res => res.json())
    .then (data => document.body.innerHTML = data.id)
    .catch(function (error) {
        alert('Unauthorized Access');
        document.body.innerHTML =(error.message)
      })
}
 