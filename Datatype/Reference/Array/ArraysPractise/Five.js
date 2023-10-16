let usernames = ["user1", "user2", "user3"];

// add new username in arrays
function addusername(username){
    if(!username == usernames.includes(username)){
        usernames.push(username);
        console.log(usernames);
    }else{
        console.log(`Username you have provided ${username} is already in existance`);
    }
}

addusername("user1");