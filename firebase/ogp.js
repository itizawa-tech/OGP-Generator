// TODO add comment
const getOgpById = async (id) => {
  try {
    // TODO fetch data
    // const data = await firebase.firestore().collection("ogp").doc(id)
    console.log(data)
    return
  } catch (err) {
    console.log(err)
    throw err
  }
}

export { postOgp, getOgpById } 