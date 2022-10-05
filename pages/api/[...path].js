// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
// /api/gateway
const API = 'http://localhost:8000/';

export default async function handler(req, res) {
  const { path } = req.query;
  let request;
  if(req.method === 'GET') {
    delete req.query.path;
    request = axios.get(API + path.join("/"));
  } else {
    request = axios.post(API + path.join("/"), req.body);
  }
  const response = await request;
  res.status(200).json(response.data);
}
