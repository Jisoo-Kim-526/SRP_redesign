import './NavBar.css'

const imgAvatarMask1 = "https://www.figma.com/api/mcp/asset/e55353d4-974f-4fc8-b7ef-ec01003a794f";
const imgUnion6 = "https://www.figma.com/api/mcp/asset/bfe5f2de-280c-4081-bf6b-a7a0a36ca17d";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__top">
        {/* Workspace Switcher */}
        <div className="nav-bar__workspace">
          <div className="workspace-icon" />
        </div>

        {/* Tab Buttons */}
        <div className="nav-bar__tabs">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`nav-tab ${i === 0 ? 'nav-tab--active' : ''}`}>
              <div className="nav-tab__backing" />
              <div className={`nav-tab__icon ${i === 0 ? 'nav-tab__icon--active' : ''}`} />
              <div className={`nav-tab__label ${i === 0 ? 'nav-tab__label--active' : ''}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="nav-bar__bottom">
        {/* Action button */}
        <div className="nav-action">
          <div className="nav-action__icon" />
          <div className="nav-action__backing" />
        </div>

        {/* Profile */}
        <div className="nav-profile">
          <div className="nav-profile__status">
            <div className="nav-profile__status-backing" />
            <div className="nav-profile__status-icon" />
          </div>
          <div className="nav-profile__avatar">
            <img src={imgAvatarMask1} alt="" className="nav-profile__avatar-img" />
            <div className="nav-profile__presence">
              <img src={imgUnion6} alt="" className="nav-profile__presence-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
