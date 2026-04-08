import './CategoryPreviewItem.css'

interface CategoryPreviewItemProps {
  thumbnail?: string
  thumbnailNode?: React.ReactNode
  name: string
  subtitle: string
  showDividerAbove?: boolean
  thumbnailRound?: boolean
  overlayIcon?: string
}

export default function CategoryPreviewItem({ thumbnail, thumbnailNode, name, subtitle, showDividerAbove, thumbnailRound, overlayIcon }: CategoryPreviewItemProps) {
  const thumbImg = thumbnailNode || (
    <img
      src={thumbnail}
      alt=""
      className={`cat-preview__thumb${thumbnailRound ? ' cat-preview__thumb--round' : ''}`}
    />
  );

  return (
    <>
      {showDividerAbove && <div className="cat-preview__divider" />}
      <div className="cat-preview">
        {overlayIcon ? (
          <div className="cat-preview__thumb-wrap">
            {thumbImg}
            <div className="cat-preview__overlay">
              <img src={overlayIcon} alt="" className="cat-preview__overlay-img" />
            </div>
          </div>
        ) : (
          thumbnailNode ? <div className="cat-preview__thumb-wrap">{thumbImg}</div> : thumbImg
        )}
        <div className="cat-preview__text">
          <span className="cat-preview__name">{name}</span>
          <span className="cat-preview__subtitle">{subtitle}</span>
        </div>
      </div>
    </>
  )
}
