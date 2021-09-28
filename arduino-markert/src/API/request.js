
async function request({ url, method, body }) {
    const response = await fetch(url, {
        method,
        headers: {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    });

    if (!response.ok) {
        throw new console.error(`Request failed with ${response.status}`);
    } else {
        const json = await response.json();
        return json;
    }
}
export default request;