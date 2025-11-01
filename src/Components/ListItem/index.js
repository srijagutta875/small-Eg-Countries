import {Component} from 'react'

import './index.css'

class ListItem extends Component {
  render() {
    const {details, toggleVisit} = this.props
    const {id, name, isVisited} = details

    return (
      <li className="listed-item">
        <p>{name}</p>
        {isVisited ? (
          <button
            type="button"
            className="visited-btn"
            onClick={() => toggleVisit(id)}
          >
            <p>Visited</p>
          </button>
        ) : (
          <button
            type="button"
            className="visit-btn"
            onClick={() => toggleVisit(id)}
          >
            <p> Visit</p>
          </button>
        )}
      </li>
    )
  }
}
export default ListItem
