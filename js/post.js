const API_URL = "https://autdevsrockstuts.herokuapp.com/api/posts/";
const API_BASE_URL = "https://autdevsrockstuts.herokuapp.com/";

window.onload = () => {
    getPost();

};

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
};

const getPost = () => {
    const url = `${API_URL}${getPostIdParam()}`
    fetch(url, {
        method: 'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPost(data);
    });
};

const buildPost = (data) => {
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImg = `${API_BASE_URL}${data.post_image}`;
    document.querySelector("header").style.backgroundImage = `url(${postImg})`;
    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-date").innerText = `Published on ${postDate}`;
    document.getElementById("individual-post-content").innerText = data.content;
};