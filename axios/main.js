axios.get('https://api.github.com/users/bernardo2512')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });