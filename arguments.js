

function add(a, b){
    console.log(arguments)
    const params = [...arguments]
    console.log(params)
}

add(3, 6, 1, 7, 3, 2, 5);