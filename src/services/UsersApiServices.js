const getAllUsers = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return users
}

const getPostsOfCurrentUser = async ({params: {id}}) => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
}

export {getAllUsers, getPostsOfCurrentUser}