import { useState } from 'react'
import './MessageResult.css'

const imgAvatarMask = "https://www.figma.com/api/mcp/asset/3628eca2-4af7-4854-8b79-706e727f2999";
const imgChannelHash = "https://www.figma.com/api/mcp/asset/09f864d0-d1f6-4dfd-a8c4-d7d77d828dc5";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/9a3cf577-bfb1-4049-8e55-da1f5222e3f6";

interface Reaction {
  emoji: string
  count: number
}

interface MessageResultProps {
  author: string
  channel: string
  timestamp: string
  content: string
  reactions?: Reaction[]
  fullContent?: string
}

export default function MessageResult({ author, channel, timestamp, content, reactions, fullContent }: MessageResultProps) {
  const [hovered, setHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="msg-result"
      onMouseEnter={(e) => { handleMouseMove(e); setHovered(true) }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="msg-result__avatar-wrap">
        <img src={imgAvatarMask} alt="" className="msg-result__avatar" />
        <div className="msg-result__channel-icon-wrap">
          <div className="msg-result__channel-icon">
            <img src={imgChannelHash} alt="" className="msg-result__channel-icon-img" />
          </div>
        </div>
      </div>

      <div className="msg-result__body">
        <div className="msg-result__header">
          <div className="msg-result__meta">
            <span className="msg-result__author">{author}</span>
            <div className="msg-result__channel-info">
              <span className="msg-result__channel-label">Post in </span>
              <span className="msg-result__channel-badge">{channel}</span>
            </div>
          </div>
          <div className="msg-result__timestamp">{timestamp}</div>
        </div>

        <p className="msg-result__content">{content}</p>

        {reactions && reactions.length > 0 && (
          <div className="msg-result__reactions">
            {reactions.map((r, i) => (
              <div key={i} className="reaction">
                <span className="reaction__emoji">{r.emoji}</span>
                <span className="reaction__count">{r.count}</span>
              </div>
            ))}
            <div className="reaction reaction--add">
              <img src={imgUnion1} alt="Add reaction" className="reaction__add-icon" />
            </div>
          </div>
        )}
      </div>

      {hovered && (
        <div
          className="msg-result__preview"
          style={{
            left: cursorPos.x,
            top: cursorPos.y + 280 + 12 > window.innerHeight
              ? cursorPos.y - 280 - 12
              : cursorPos.y + 12,
          }}
        >
          <div className="msg-result__preview-header">
            <div className="msg-result__preview-avatar-wrap">
              <img src={imgAvatarMask} alt="" className="msg-result__preview-avatar" />
              <div className="msg-result__preview-channel-icon-wrap">
                <div className="msg-result__preview-channel-icon-inner">
                  <img src={imgChannelHash} alt="" />
                </div>
              </div>
            </div>
            <div className="msg-result__preview-meta">
              <span className="msg-result__preview-author">{author}</span>
              <div className="msg-result__preview-channel">
                <span className="msg-result__preview-channel-label">Post in </span>
                <span className="msg-result__preview-channel-badge">{channel}</span>
              </div>
            </div>
          </div>
          <p className="msg-result__preview-content">{fullContent || content}</p>
          <span className="msg-result__preview-timestamp">{timestamp}</span>
        </div>
      )}
    </div>
  )
}
