import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

const GameService = {

  async create({ name }: { name: string }) {

    const { data } = await axios.post(`${BASE_URL}/v1/game`, {
      name
    });

    return data.id;
  },

  async get({ id }: { id: string }) {
    const { data } = await axios.get(`${BASE_URL}/v1/game/${id}`);

    return data;
  }
};

export { GameService };
