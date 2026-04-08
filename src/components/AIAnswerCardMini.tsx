import './AIAnswerCardMini.css'

const imgSlackbotColor = "https://www.figma.com/api/mcp/asset/f559dfac-68ee-4a02-9e35-3abef4975a93";

export default function AIAnswerCardMini() {
  return (
    <div className="ai-mini">
      <div className="ai-mini__header">
        <img src={imgSlackbotColor} alt="" className="ai-mini__icon" />
        <span className="ai-mini__title">AI answer</span>
      </div>
      <div className="ai-mini__body">
        <p className="ai-mini__text">
          Here's what you (<span className="ai-mini__mention">@CarmenVega</span>) accomplished this week:
        </p>
        <ul className="ai-mini__list">
          <li>Here's what you (@CarmenVega) accomplished this week:</li>
        </ul>
      </div>
      <div className="ai-mini__fade" />
      <a href="#" className="ai-mini__readmore">Read more</a>
    </div>
  )
}
