interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: string;
  savedAgo: string;
  image: string;
}

const items: WishlistItem[] = [
  {
    id: 1,
    name: "Nike Air Max 270",
    description:
      "Premium logistics quote for cross-border shipping from UK to Kampala. Includes customs clearing and doorstep delivery.",
    price: "UGX 845,000",
    savedAgo: "Saved 2 days ago",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=256&h=256&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Minimalist Watch",
    description:
      "Express shipping quote from USA. Fragile handling requested. Guaranteed delivery within 7 working days.",
    price: "UGX 1,250,000",
    savedAgo: "Saved 5 days ago",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=256&h=256&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description:
      "Logistics only quote for electronic device. Includes insurance and secure transit tracking.",
    price: "UGX 1,890,000",
    savedAgo: "Saved yesterday",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=256&h=256&fit=crop&auto=format",
  },
];

function WishlistCard({ item }: { item: WishlistItem }) {
  return (
    <div className="bg-white border border-outline-variant p-4 flex gap-6 hover:shadow-sm transition-shadow">
      <div className="w-32 h-32 bg-surface-container-low flex-shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow min-w-0">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-[24px] leading-[1.3] font-semibold text-on-background">
              {item.name}
            </h3>
            <span className="text-[12px] leading-[1.2] font-medium text-on-surface-variant flex-shrink-0">
              {item.savedAgo}
            </span>
          </div>
          <p className="text-on-surface-variant text-sm mt-1 line-clamp-2">{item.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <span className="text-[24px] leading-[1.3] font-bold text-primary">{item.price}</span>
          <div className="flex gap-2">
            <button className="text-error text-[14px] leading-[1.2] font-medium px-3 py-1 hover:bg-error-container transition-colors rounded">
              Remove
            </button>
            <button className="bg-secondary-container text-black px-4 py-2 font-bold text-[14px] leading-[1.2] rounded hover:opacity-90 transition-opacity">
              Move to Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wishlist() {
  return (
    <div className="px-10 py-8">
      <header className="mb-8">
        <h1 className="text-[32px] leading-[1.2] tracking-[-0.02em] font-bold text-on-background mb-2">
          Wishlist
        </h1>
        <p className="text-on-surface-variant text-[16px] leading-[1.5]">
          Items and quotes you've saved for later. Review and approve them when you're ready.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-outline" style={{ fontSize: "40px" }}>
              bookmark_border
            </span>
          </div>
          <h2 className="text-[24px] leading-[1.3] font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-on-surface-variant text-[16px] leading-[1.5] mb-8">
            Save quotes here to review them later.
          </p>
          <a
            href="/"
            className="bg-primary text-on-primary px-8 py-3 rounded font-bold text-[14px] leading-[1.2]"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {items.map((item) => (
            <WishlistCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
