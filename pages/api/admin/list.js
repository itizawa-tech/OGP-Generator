import { db } from '../../../lib/db'

export default async (req, res) => {

  const { userId } = req.query

  const fetchList = async () => {
    let ogpList = []
    try {
      const snapshot = await db.collection("ogp").where("creatorId", "==", userId).get()
      await snapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        ogpList.push(Object.assign({ id: doc.id }, doc.data()))
      });
      res.status(200).send({ ogpList });
    } catch (err) {
      console.log(err)
      throw err
    }
  }


  const { method } = req
  switch (method) {
    case 'GET':
      fetchList()
      break;
    default:
      break;
  }


};
