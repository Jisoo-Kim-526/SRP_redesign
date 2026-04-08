import './TopBar.css'

const imgUnion2 = "https://www.figma.com/api/mcp/asset/16c697c8-55b5-4b63-a024-5be318963ead";
const imgUnion3 = "https://www.figma.com/api/mcp/asset/0683bdde-691b-4da7-a790-b47871dd471a";
const imgUnion4 = "https://www.figma.com/api/mcp/asset/122db726-c45f-47cc-a362-cf0c8533dac6";
const imgUnion5 = "https://www.figma.com/api/mcp/asset/43aaa536-f3eb-48a3-af50-5741a4b5727a";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <div className="top-bar__stoplights">
          <div className="stoplight stoplight--close" />
          <div className="stoplight stoplight--minimize" />
          <div className="stoplight stoplight--fullscreen" />
        </div>
      </div>

      <div className="top-bar__nav">
        <div className="top-bar__switcher">
          <button className="chrome-btn">
            <img src={imgUnion2} alt="" className="chrome-icon" style={{ width: 15, height: 13.5 }} />
          </button>
        </div>
        <div className="top-bar__arrows">
          <button className="chrome-btn">
            <img src={imgUnion3} alt="" className="chrome-icon" style={{ width: 12, height: 12 }} />
          </button>
          <button className="chrome-btn chrome-btn--disabled">
            <img src={imgUnion3} alt="" className="chrome-icon chrome-icon--flipped" style={{ width: 12, height: 12 }} />
          </button>
          <button className="chrome-btn">
            <img src={imgUnion4} alt="" className="chrome-icon" style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>

      <div className="top-bar__search">
        <div className="search-input">
          <svg className="search-input__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.5 3a5.5 5.5 0 0 1 4.383 8.823l3.896 3.897a.75.75 0 0 1-1.06 1.06l-3.897-3.896A5.5 5.5 0 1 1 8.5 3Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="white"/>
          </svg>
          <span className="search-input__text">Ask anything</span>
        </div>
      </div>

      <div className="top-bar__right">
        <button className="chrome-btn">
          <img src={imgUnion5} alt="" className="chrome-icon" style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  )
}
