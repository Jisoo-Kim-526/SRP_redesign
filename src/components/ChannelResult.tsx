import './ChannelResult.css'

interface ChannelResultProps {
  name: string
  memberCount: number
  timestamp: string
  content: string
}

export default function ChannelResult({ name, memberCount, timestamp, content }: ChannelResultProps) {
  return (
    <div className="channel-result">
      <div className="channel-result__thumb">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="9" fill="#83388A" />
          <text x="18" y="24" textAnchor="middle" fill="white" fontFamily="Lato, sans-serif" fontWeight="700" fontSize="18">#</text>
        </svg>
      </div>

      <div className="channel-result__body">
        <div className="channel-result__header">
          <div className="channel-result__meta">
            <span className="channel-result__name">{name}</span>
            <span className="channel-result__info">{memberCount} members</span>
          </div>
          <div className="channel-result__timestamp">{timestamp}</div>
        </div>
        <p className="channel-result__content">{content}</p>
      </div>
    </div>
  )
}
