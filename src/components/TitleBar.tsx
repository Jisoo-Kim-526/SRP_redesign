import './TitleBar.css'

export default function TitleBar() {
  return (
    <div className="title-bar">
      <div className="title-bar__left">
        <span className="title-bar__label">Results for: </span>
        <span className="title-bar__query">"Search strategy"</span>
      </div>
      <a className="title-bar__feedback" href="#">Give feedback</a>
    </div>
  )
}
