// pages/api/hello.js

export default async function handler(req, res) {
  const apiRes = await fetch('http://3.110.118.241:5000/api/hello');  // Replace with your EC2 IP and port
  const data = await apiRes.json();

  res.status(200).json(data);
}
