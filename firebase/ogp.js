import firebase from './clientApp'

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

export { postOgp } 