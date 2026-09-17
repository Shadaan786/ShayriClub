const env = import.meta.env.MODE === 'development'? 'http://16.192.173.158:4000':'wss://shayribackend-ff04.onrender.com'


console.log('current mode', import.meta.env.MODE);
console.log('current ws api in use', env);

export default env