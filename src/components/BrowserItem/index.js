import './index.css'

const BrowserItem = props => {
  const {browserDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="img" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserItem
