import { useState } from 'react'
import './FileResult.css'

interface FileResultProps {
  title: string
  author: string
  readTime: string
  timestamp: string
  content: string
  fullContent?: string
  iconNode?: React.ReactNode
}

export default function FileResult({ title, author, readTime, timestamp, content, fullContent, iconNode }: FileResultProps) {
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
          {iconNode}
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
              {iconNode}
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
