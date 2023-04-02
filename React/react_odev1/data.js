import axios from "axios";


async function getData( id ) {
    const { data: users } = await axios( `https://jsonplaceholder.typicode.com/users/${ id }` );
    //console.log( users )

    const { data: post } = await axios( `https://jsonplaceholder.typicode.com/posts?userId=${ id }`)
    //console.log( post ); 

    const userPost = { "UserInfo" : users, "Posts" :  post  }
    console.log(userPost);

    return userPost
}

export default getData;