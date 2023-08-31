const getAllPosts = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

export {getAllPosts}