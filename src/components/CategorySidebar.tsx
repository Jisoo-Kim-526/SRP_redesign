import './CategorySidebar.css'
import AIAnswerCardMini from './AIAnswerCardMini'
import CategoryCard from './CategoryCard'
import CategoryPreviewItem from './CategoryPreviewItem'

// Icon assets from Figma
const imgMessageIcon = "https://www.figma.com/api/mcp/asset/3c0647db-4a69-46ec-af29-3b7ea4ac739f";
const imgFilesIcon = "https://www.figma.com/api/mcp/asset/841733d7-0023-484d-af32-ca0255c547c4";
const imgPlugIcon = "https://www.figma.com/api/mcp/asset/59ff38cc-b089-40b1-8d0a-9c8a94f8a79d";
const imgChannelIcon = "https://www.figma.com/api/mcp/asset/32dbb40d-1a7a-45b7-8916-eaceaa17dd1c";

// Avatars for message previews
const imgAvatarGeeta = "https://www.figma.com/api/mcp/asset/48a17787-21f3-44e3-9fa9-d82892d782c6";
const imgAvatarHao = "https://www.figma.com/api/mcp/asset/9e1a0d45-9e2d-4b61-9643-461477056da2";

// Channel overlay icon for message avatars
const imgChannelOverlay = "https://www.figma.com/api/mcp/asset/80d4d28a-3a76-4df0-92e8-f89fdd5d2168";

// External thumbnails
const imgGoogleSlides = "https://www.figma.com/api/mcp/asset/56ae127c-b0c3-4958-a8ed-8c135a6464e5";
const imgGitHub = "https://www.figma.com/api/mcp/asset/5d25b166-f08d-4404-8429-d0a624cb0732";

function CanvasThumbnail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#0E9DD3"/>
      <path d="M7 8.5C7 7.67 7.67 7 8.5 7H15.5C16.33 7 17 7.67 17 8.5V15.5C17 16.33 16.33 17 15.5 17H8.5C7.67 17 7 16.33 7 15.5V8.5Z" stroke="white" strokeWidth="1.2" fill="none"/>
      <circle cx="10.5" cy="10.5" r="1.25" fill="white"/>
      <path d="M7 14.5L10 12L12.5 14L14.5 12.5L17 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ListsThumbnail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#ECB22E"/>
      <rect x="7" y="7.5" width="10" height="1.5" rx="0.75" fill="white"/>
      <rect x="7" y="11.25" width="10" height="1.5" rx="0.75" fill="white"/>
      <rect x="7" y="15" width="7" height="1.5" rx="0.75" fill="white"/>
    </svg>
  );
}

function ChannelThumbnail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#83388A"/>
      <text x="12" y="16.5" textAnchor="middle" fill="white" fontFamily="Lato, sans-serif" fontWeight="700" fontSize="14">#</text>
    </svg>
  );
}

type Category = 'messages' | 'files'

interface CategorySidebarProps {
  selectedCategory: Category
  onSelectCategory: (cat: Category) => void
}

export default function CategorySidebar({ selectedCategory, onSelectCategory }: CategorySidebarProps) {
  return (
    <div className="cat-sidebar">
      <div className="cat-sidebar__group">
        <AIAnswerCardMini />

        <CategoryCard
          icon={imgMessageIcon}
          label="Messages"
          selected={selectedCategory === 'messages'}
          selectable
          onClick={() => onSelectCategory('messages')}
        >
          <CategoryPreviewItem
            thumbnail={imgAvatarGeeta}
            thumbnailRound
            name="Geeta Joshi"
            subtitle="Wanted to sanity check so..."
            overlayIcon={imgChannelOverlay}
          />
          <CategoryPreviewItem
            thumbnail={imgAvatarHao}
            thumbnailRound
            name="Geeta Joshi"
            subtitle="Wanted to sanity check so..."
            showDividerAbove
            overlayIcon={imgChannelOverlay}
          />
        </CategoryCard>

        <CategoryCard
          icon={imgFilesIcon}
          label="Files"
          selected={selectedCategory === 'files'}
          selectable
          onClick={() => onSelectCategory('files')}
        >
          <CategoryPreviewItem
            thumbnailNode={<CanvasThumbnail />}
            name="Search roadmap"
            subtitle="Geeta Joshi · 1 min read"
          />
          <CategoryPreviewItem
            thumbnailNode={<ListsThumbnail />}
            name="Search roadmap"
            subtitle="Geeta Joshi · 1 min read"
            showDividerAbove
          />
        </CategoryCard>

        <CategoryCard
          icon={imgPlugIcon}
          label="External"
        >
          <CategoryPreviewItem
            thumbnail={imgGoogleSlides}
            name="Search roadmap"
            subtitle="Geeta Joshi · 1 min read"
          />
          <CategoryPreviewItem
            thumbnail={imgGitHub}
            name="Search roadmap"
            subtitle="Geeta Joshi · 1 min read"
            showDividerAbove
          />
        </CategoryCard>
      </div>

      <CategoryCard
        icon={imgChannelIcon}
        label="Channels"
      >
        <CategoryPreviewItem
          thumbnailNode={<ChannelThumbnail />}
          name="Search roadmap"
          subtitle="62 members"
        />
        <CategoryPreviewItem
          thumbnailNode={<ChannelThumbnail />}
          name="Search roadmap"
          subtitle="32 members"
          showDividerAbove
        />
      </CategoryCard>
    </div>
  )
}
