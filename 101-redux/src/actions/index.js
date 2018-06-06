// index.js ACTIONS../ACTION-CREATOR

export function moviesList() {
    return {
        type: "MOVIES_LIST",
        payload: [
            { id: 1, name: "PULP FICTION" },
            { id: 2, name: "300" },
            { id: 3, name: "INCEPTION" }
        ]
    };
}
