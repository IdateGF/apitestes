const API_BASE = 'http://localhost:3333';

const basicFetch = async (endpoint) =>{
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getList: async () => {
    return {
      filmes: await basicFetch('/filmes')
    }
  }
}