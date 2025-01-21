function fetchData(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                user: { id: 1, name: "Alice" },
                posts: [{ id: 101, title: "First Post" }],
                comments: [{ postId: 101, comment: "Great post!" }],
            };
            resolve(data[endpoint]);
        }, 1000);
    });
}

fetchData("user")
    .then((user) => fetchData("posts").then((posts) => ({ user, posts })))
    .then(({ user, posts }) => fetchData("comments").then((comments) => ({ user, posts, comments })))
    .then(({ user, posts, comments }) => {
        console.log(user, posts, comments);
    })
    .catch((error) => console.error(error));
