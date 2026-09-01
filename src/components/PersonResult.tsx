import './PersonResult.css'

interface PersonResultProps {
  name: string
  title: string
  status: string
  timestamp: string
  avatar: string
}

export default function PersonResult({ name, title, status, timestamp, avatar }: PersonResultProps) {
  return (
    <div className="person-result">
      <div className="person-result__avatar-wrap">
        <img src={avatar} alt="" className="person-result__avatar" />
        <div className="person-result__presence" />
      </div>

      <div className="person-result__body">
        <div className="person-result__header">
          <div className="person-result__meta">
            <span className="person-result__name">{name}</span>
            <span className="person-result__info">{title}</span>
          </div>
          <div className="person-result__timestamp">{timestamp}</div>
        </div>
        <p className="person-result__content">{status}</p>
      </div>
    </div>
  )
}
