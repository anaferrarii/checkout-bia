export default async function handler(req, res) {
  const { valor } = req.query;

  const r = await fetch("https://api.pushinpay.com.br/api/pix/cashIn", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 35578|CcvDmyf8NKc7a3wV0giceITO0YYY7Fos2PnFkRHzec93f0df",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      value: valor,
      name: "Bia Miranda",
      document: "12345678900"
    })
  });

  const json = await r.json();
  res.status(200).json(json);
}
