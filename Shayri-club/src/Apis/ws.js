const env = import.meta.env.MODE === 'development'? 'ws://localhost:8080':'wss://shayribackend-ff04.onrender.com'


export default env