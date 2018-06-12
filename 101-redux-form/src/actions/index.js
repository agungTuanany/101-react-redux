//json-server --watch db.json --port 3004

const URL = 'http://localhost:3004';

export function getMessages() {
    const request = fetch(`${URL}/messages`, {
        method: 'GET'
    }).then(response => response.json());

    return {
        type: 'GET_MESSAGES',
        payload: request
    };
}

export function addMessage(values) {
    const request = fetch(`${URL}/messages`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
    }).then(response => response.json());

    return {
        type: 'ADD_MESSAGE',
        payload: 'everything went fine'
    };
}
