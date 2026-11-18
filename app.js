// Section 1: Configuration (Changed port and added timeout)
const config = {
    env: "staging",
    port: 8080,
    timeout: 5000
};

// Section 2: Authentication (Added password validation)
function login(user, password) {
    if (!password) return false;
    console.log("Authenticating:", user);
    return true;
}

// Section 3: Data Processing (Added filtering before mapping)
function processData(data) {
    return data.filter(x => x > 0).map(item => item * 2);
}