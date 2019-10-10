const BASE_URL = '/api/tasks';

export default {
    index,
    create,
    update,
    deleteOne,
    complete
};

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(task) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(task)
    }).then(res => res.json());
}

function update(task) {
    return fetch(`${BASE_URL}/${task._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(task)
    }).then(res => res.json());
}

function complete(id, completeStatus) {
    console.log(completeStatus);
    return fetch(`${BASE_URL}/${id}/complete`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ completed: completeStatus })
    }).then(res => res.json());
}

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}
