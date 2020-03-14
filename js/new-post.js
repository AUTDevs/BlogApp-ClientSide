const API_URL = "https://autdevsrockstuts.herokuapp.com//api/posts";

const submitNewPost = () => {
    let input = document.getElementById("form-post-image");
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;

    let data = new FormData();
    data.append('post-image', input.files[0]);
    data.append('title', title);
    data.append('content', content);

    fetch(API_URL, {
        method: 'POST',
        body: data
    }).then(() => {
        setTimeout(() => {
            window.location.href= "index.html";
        }, 1000);
    });

};