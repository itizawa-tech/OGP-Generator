import axios from 'axios'
import urljoin from 'url-join'
import { Button } from 'reactstrap';

import { toastError } from '../lib/utils/toaster'

class OgpTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ogpList: [],
    }

  }

  componentDidMount() {
    this.retrieveOgpList()
  }

  async retrieveOgpList() {
    try {
      const userId = this.props.user.uid
      const response = await axios.get(`/api/admin/list?userId=${userId}`)
      const { ogpList } = response.data
      this.setState({ ogpList })
    } catch (err) {
      toastError(err)
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="ml-3">Page List</h1>
        <div className="table-responsive px-2">
          <table className="table table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th width="300px">PageLink</th>
                <th>Title</th>
                <th>Description</th>
                <th>Share</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.ogpList.map((ogp) => {
                return (
                  <tr key={ogp.id}>
                    <th><a href={urljoin('https://', ogp.siteUrl)}>{urljoin('https://', ogp.siteUrl)}</a></th>
                    <td>{ogp.cardTitle}</td>
                    <td>{ogp.cardDesc}</td>
                    <td></td>
                    <td className="text-right">
                      <Button color="primary">
                        <i className="fas fa-cog mr-2" /><span className="d-none d-md-inline-block">編集する</span>
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }

}

export default OgpTable