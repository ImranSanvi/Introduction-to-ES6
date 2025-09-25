
function callMe(callback, friend, supervisor){
    if(supervisor){
        console.log(`${friend} is calling to me and say`)
        person('')
    }
    else{
        console.log('off day...')
    }
}

function person(){
    console.log('sir is comming..')
}

callMe(person, 'asif', 'sir');