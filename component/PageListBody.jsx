
const PageListBody = (props) => {
  console.log(props)
  const { pages } = props;

  return (
    <tbody>
      {pages.map((page) => {
        return (
          <tr key={page._id}>
            <th>{page.path}</th>
            <td>
              <small>{page.updatedAt}</small>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}


export default PageListBody