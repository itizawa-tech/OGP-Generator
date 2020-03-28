import firebase from './clientApp'

// TODO add comment
const postOgp = async ({ ...ogpData }) => {
  try {
    const { id } = await firebase.firestore().collection("ogp").add({
      siteUrl: ogpData.siteUrl,
      cardTitle: ogpData.cardTitle,
      cardDesc: ogpData.cardDesc,
    })
    return id
  } catch (err) {
    console.log(err)
    throw err
  }
}

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