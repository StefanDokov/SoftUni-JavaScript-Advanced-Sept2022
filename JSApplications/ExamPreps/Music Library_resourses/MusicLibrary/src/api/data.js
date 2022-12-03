import { del, get, post, put } from "./api.js";


export async function getAll(){
    return get('/data/albums?sortBy=_createdOn%20desc');
}

export async function createPost(postData) {
    return post('/data/albums', postData);

}

export async function getById(id) {
    return get('/data/albums/' + id);
}

export async function deleteById(id){
    return del('/data/albums/' + id);
}

export async function editPost(id, data){
    return put('/data/albums/' + id, data);
}

export async function getLikes(id) {
    return get(`/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
}

export async function postLike(albumId){
    return post('/data/likes', {
        albumId
    });
}

export async function doesHelike(id, useid){
    return get(`/data/likes?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${useid}%22&count`);
}