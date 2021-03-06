import { db } from '../../lib/db'

export default async (req, res) => {
  const { user, siteUrl, cardTitle, cardDesc } = req.body

  const postOgp = async () => {
    try {
      const { id } = await db.collection("ogp").add({
        creatorId: user.uid,
        siteUrl,
        cardTitle,
        cardDesc,
      })
      res.status(200).send({ id });
    } catch (err) {
      console.log(err)
      throw err
    }
  }


  const { method } = req
  switch (method) {
    case 'POST':
      postOgp()
      break;
    default:
      break;
  }


};
