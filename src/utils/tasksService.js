const BASE_URL = '/api/tasks';

export default {
    index,
    create
};

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(task) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}