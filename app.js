// Section 1: Configuration
const config = {
    env: "development",
    port: 3000,
    debug: true
};

// Section 2: Authentication
function login(user) {
    console.log("Logging in user:", user);
    return true;
}

// Section 3: Data Processing
function processData(data) {
    return data.map(item => item * 2);
}
