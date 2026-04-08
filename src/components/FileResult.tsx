import { useState } from 'react'
import './FileResult.css'

const imgFileThumbnail = "https://www.figma.com/api/mcp/asset/50a28c82-3e51-41a9-9ae3-e4d9d4e71226";
const imgIcon = "https://www.figma.com/api/mcp/asset/04113803-3bf1-4e49-9167-d960e617e2be";
const imgAvatar = "https://www.figma.com/api/mcp/asset/1daa55a0-1bf0-4826-8936-ceab0c256cc3";

interface FileResultProps {
  title: string
  author: string
  readTime: string
  timestamp: string
  content: string
  fullContent?: string
}

export default function FileResult({ title, author, readTime, timestamp, content, fullContent }: FileResultProps) {
  const [hovered, setHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="file-result"
      onMouseEnter={(e) => { handleMouseMove(e); setHovered(true) }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="file-result__thumb-wrap">
        <div className="file-result__thumb">
          <img src={imgFileThumbnail} alt="" className="file-result__thumb-bg" />
          <div className="file-result__thumb-icon">
            <img src={imgIcon} alt="" />
          </div>
        </div>
        <div className="file-result__thumb-avatar">
          <img src={imgAvatar} alt="" className="file-result__thumb-avatar-img" />
        </div>
      </div>

      <div className="file-result__body">
        <div className="file-result__header">
          <div className="file-result__meta">
            <span className="file-result__title">{title}</span>
            <span className="file-result__info">{author} · {readTime}</span>
          </div>
          <div className="file-result__timestamp">{timestamp}</div>
        </div>
        <p className="file-result__content">{content}</p>
      </div>

      {hovered && (
        <div
          className="file-result__preview"
          style={{
            left: cursorPos.x,
            top: cursorPos.y + 280 + 12 > window.innerHeight
              ? cursorPos.y - 280 - 12
              : cursorPos.y + 12,
          }}
        >
          <div className="file-result__preview-header">
            <div className="file-result__preview-thumb">
              <img src={imgFileThumbnail} alt="" className="file-result__thumb-bg" />
              <div className="file-result__thumb-icon">
                <img src={imgIcon} alt="" />
              </div>
            </div>
            <div className="file-result__preview-meta">
              <span className="file-result__preview-title">{title}</span>
              <span className="file-result__preview-info">{author} · {readTime}</span>
            </div>
          </div>
          <p className="file-result__preview-content">{fullContent || content}</p>
          <span className="file-result__preview-timestamp">{timestamp}</span>
        </div>
      )}
    </div>
  )
}
