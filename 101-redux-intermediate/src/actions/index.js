// index.js ACTION-CREATORS

const URL_ROOT = 'http:localhost:3004';

export function getCars(keywords) {
    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {
        method: 'GET'
    });

    return {
        type: 'SEARCH_CARS',
        payload: request
    };
}
