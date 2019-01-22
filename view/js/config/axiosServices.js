let token = localStorage.getItem('JWT_TOKEN');

const config = {
    headers: {"Authorization": `${token}`}
}

export default config;