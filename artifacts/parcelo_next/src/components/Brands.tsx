'use client'

import React, { useState, useRef } from 'react'
import {
  ShoppingCart, Shirt, Sparkles, Laptop, Dumbbell,
  Home, Leaf, Star, BookOpen, Car, ShoppingBag, Baby,
  type LucideIcon
} from 'lucide-react'

const LOGO_TOKEN = process.env.NEXT_PUBLIC_LOGO_DEV_KEY

const LOGO_SOURCES = (domain: string) => [
  `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=128&format=png`,
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
]

const BrandLogo = ({ domain, name }: { domain: string; name: string }) => {
  const sourcesRef = useRef<string[]>(LOGO_SOURCES(domain))
  const [srcIndex, setSrcIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    const next = srcIndex + 1
    if (next < sourcesRef.current.length) {
      setSrcIndex(next)
    } else {
      setFailed(true)
    }
  }

  return (
    <div style={{ position: 'relative', width: '48px', height: '48px' }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: 'var(--obsidian)',
        color: 'var(--gold)',
        fontSize: '20px',
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px'
      }}>
        {name.charAt(0)}
      </div>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sourcesRef.current[srcIndex]}
          alt={name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
            background: '#fff'
          }}
          onError={handleError}
        />
      )}
    </div>
  )
}

const BRANDS = [
  // MARKETPLACE
  {name:"Amazon",domain:"amazon.com",url:"https://www.amazon.com",cat:"Marketplace"},
  {name:"Walmart",domain:"walmart.com",url:"https://www.walmart.com",cat:"Marketplace"},
  {name:"eBay",domain:"ebay.com",url:"https://www.ebay.com",cat:"Marketplace"},
  {name:"Target",domain:"target.com",url:"https://www.target.com",cat:"Marketplace"},
  {name:"Etsy",domain:"etsy.com",url:"https://www.etsy.com",cat:"Marketplace"},
  {name:"Chewy",domain:"chewy.com",url:"https://www.chewy.com",cat:"Marketplace"},
  {name:"Touch of Modern",domain:"touchofmodern.com",url:"https://www.touchofmodern.com",cat:"Marketplace"},
  // FASHION
  {name:"Nike",domain:"nike.com",url:"https://www.nike.com",cat:"Fashion & Apparel"},
  {name:"Adidas",domain:"adidas.com",url:"https://www.adidas.com",cat:"Fashion & Apparel"},
  {name:"Zara",domain:"zara.com",url:"https://www.zara.com",cat:"Fashion & Apparel"},
  {name:"H&M",domain:"hm.com",url:"https://www.hm.com",cat:"Fashion & Apparel"},
  {name:"ASOS",domain:"asos.com",url:"https://www.asos.com",cat:"Fashion & Apparel"},
  {name:"Shein",domain:"shein.com",url:"https://www.shein.com",cat:"Fashion & Apparel"},
  {name:"Lululemon",domain:"lululemon.com",url:"https://www.lululemon.com",cat:"Fashion & Apparel"},
  {name:"Gymshark",domain:"gymshark.com",url:"https://www.gymshark.com",cat:"Fashion & Apparel"},
  {name:"Under Armour",domain:"underarmour.com",url:"https://www.underarmour.com",cat:"Fashion & Apparel"},
  {name:"Nordstrom",domain:"nordstrom.com",url:"https://www.nordstrom.com",cat:"Fashion & Apparel"},
  {name:"Macy's",domain:"macys.com",url:"https://www.macys.com",cat:"Fashion & Apparel"},
  {name:"Victoria's Secret",domain:"victoriassecret.com",url:"https://www.victoriassecret.com",cat:"Fashion & Apparel"},
  {name:"Fashion Nova",domain:"fashionnova.com",url:"https://www.fashionnova.com",cat:"Fashion & Apparel"},
  {name:"Michael Kors",domain:"michaelkors.com",url:"https://www.michaelkors.com",cat:"Fashion & Apparel"},
  {name:"Coach",domain:"coach.com",url:"https://www.coach.com",cat:"Fashion & Apparel"},
  {name:"Calvin Klein",domain:"calvinklein.com",url:"https://www.calvinklein.com",cat:"Fashion & Apparel"},
  {name:"Tommy Hilfiger",domain:"tommy.com",url:"https://www.tommy.com",cat:"Fashion & Apparel"},
  {name:"Levi's",domain:"levi.com",url:"https://www.levi.com",cat:"Fashion & Apparel"},
  {name:"Puma",domain:"puma.com",url:"https://www.puma.com",cat:"Fashion & Apparel"},
  {name:"New Balance",domain:"newbalance.com",url:"https://www.newbalance.com",cat:"Fashion & Apparel"},
  {name:"Foot Locker",domain:"footlocker.com",url:"https://www.footlocker.com",cat:"Fashion & Apparel"},
  {name:"Zappos",domain:"zappos.com",url:"https://www.zappos.com",cat:"Fashion & Apparel"},
  {name:"Marks & Spencer",domain:"marksandspencer.com",url:"https://www.marksandspencer.com",cat:"Fashion & Apparel"},
  {name:"Harrods",domain:"harrods.com",url:"https://www.harrods.com",cat:"Fashion & Apparel"},
  {name:"John Lewis",domain:"johnlewis.com",url:"https://www.johnlewis.com",cat:"Fashion & Apparel"},
  {name:"River Island",domain:"riverisland.com",url:"https://www.riverisland.com",cat:"Fashion & Apparel"},
  {name:"Burberry",domain:"burberry.com",url:"https://www.burberry.com",cat:"Fashion & Apparel"},
  {name:"Selfridges",domain:"selfridges.com",url:"https://www.selfridges.com",cat:"Fashion & Apparel"},
  {name:"Ted Baker",domain:"tedbaker.com",url:"https://www.tedbaker.com",cat:"Fashion & Apparel"},
  {name:"Pretty Little Thing",domain:"prettylittlething.com",url:"https://www.prettylittlething.com",cat:"Fashion & Apparel"},
  {name:"Uniqlo",domain:"uniqlo.com",url:"https://www.uniqlo.com",cat:"Fashion & Apparel"},
  // BEAUTY
  {name:"Bath & Body Works",domain:"bathandbodyworks.com",url:"https://www.bathandbodyworks.com",cat:"Beauty & Skincare"},
  {name:"Sephora",domain:"sephora.com",url:"https://www.sephora.com",cat:"Beauty & Skincare"},
  {name:"Colourpop",domain:"colourpop.com",url:"https://www.colourpop.com",cat:"Beauty & Skincare"},
  {name:"NYX Cosmetics",domain:"nyxcosmetics.com",url:"https://www.nyxcosmetics.com",cat:"Beauty & Skincare"},
  {name:"Glossier",domain:"glossier.com",url:"https://www.glossier.com",cat:"Beauty & Skincare"},
  {name:"Morphe",domain:"morphe.com",url:"https://www.morphe.com",cat:"Beauty & Skincare"},
  {name:"The Body Shop",domain:"thebodyshop.com",url:"https://www.thebodyshop.com",cat:"Beauty & Skincare"},
  {name:"Lush",domain:"lush.com",url:"https://www.lush.com",cat:"Beauty & Skincare"},
  {name:"Boots",domain:"boots.com",url:"https://www.boots.com",cat:"Beauty & Skincare"},
  {name:"Superdrug",domain:"superdrug.com",url:"https://www.superdrug.com",cat:"Beauty & Skincare"},
  // ELECTRONICS
  {name:"Apple",domain:"apple.com",url:"https://www.apple.com",cat:"Electronics & Tech"},
  {name:"Best Buy",domain:"bestbuy.com",url:"https://www.bestbuy.com",cat:"Electronics & Tech"},
  {name:"Anker",domain:"anker.com",url:"https://www.anker.com",cat:"Electronics & Tech"},
  {name:"Newegg",domain:"newegg.com",url:"https://www.newegg.com",cat:"Electronics & Tech"},
  {name:"Ubiquiti",domain:"ui.com",url:"https://www.ui.com",cat:"Electronics & Tech"},
  {name:"Currys",domain:"currys.co.uk",url:"https://www.currys.co.uk",cat:"Electronics & Tech"},
  {name:"AO",domain:"ao.com",url:"https://www.ao.com",cat:"Electronics & Tech"},
  // SPORTS
  {name:"REI",domain:"rei.com",url:"https://www.rei.com",cat:"Sports & Fitness"},
  {name:"Rogue Fitness",domain:"roguefitness.com",url:"https://www.roguefitness.com",cat:"Sports & Fitness"},
  {name:"Bodybuilding.com",domain:"bodybuilding.com",url:"https://www.bodybuilding.com",cat:"Sports & Fitness"},
  {name:"Dick's Sporting",domain:"dickssportinggoods.com",url:"https://www.dickssportinggoods.com",cat:"Sports & Fitness"},
  {name:"Sports Direct",domain:"sportsdirect.com",url:"https://www.sportsdirect.com",cat:"Sports & Fitness"},
  {name:"Decathlon",domain:"decathlon.co.uk",url:"https://www.decathlon.co.uk",cat:"Sports & Fitness"},
  // HOME
  {name:"Wayfair",domain:"wayfair.com",url:"https://www.wayfair.com",cat:"Home & Living"},
  {name:"Pottery Barn",domain:"potterybarn.com",url:"https://www.potterybarn.com",cat:"Home & Living"},
  {name:"Crate & Barrel",domain:"crateandbarrel.com",url:"https://www.crateandbarrel.com",cat:"Home & Living"},
  {name:"Home Depot",domain:"homedepot.com",url:"https://www.homedepot.com",cat:"Home & Living"},
  {name:"Argos",domain:"argos.co.uk",url:"https://www.argos.co.uk",cat:"Home & Living"},
  {name:"B&Q",domain:"diy.com",url:"https://www.diy.com",cat:"Home & Living"},
  {name:"Fortnum & Mason",domain:"fortnumandmason.com",url:"https://www.fortnumandmason.com",cat:"Home & Living"},
  {name:"Oliver Bonas",domain:"oliverbonas.com",url:"https://www.oliverbonas.com",cat:"Home & Living"},
  // HEALTH
  {name:"iHerb",domain:"iherb.com",url:"https://www.iherb.com",cat:"Health & Wellness"},
  {name:"Puritan's Pride",domain:"puritan.com",url:"https://www.puritan.com",cat:"Health & Wellness"},
  {name:"Vitacost",domain:"vitacost.com",url:"https://www.vitacost.com",cat:"Health & Wellness"},
  {name:"Athletic Greens",domain:"athleticgreens.com",url:"https://www.athleticgreens.com",cat:"Health & Wellness"},
  {name:"Walgreens",domain:"walgreens.com",url:"https://www.walgreens.com",cat:"Health & Wellness"},
  // KIDS
  {name:"Carter's",domain:"carters.com",url:"https://www.carters.com",cat:"Kids & Baby"},
  {name:"The Children's Place",domain:"childrensplace.com",url:"https://www.childrensplace.com",cat:"Kids & Baby"},
  {name:"OshKosh",domain:"oshkosh.com",url:"https://www.carters.com/oshkosh",cat:"Kids & Baby"},
  // BOOKS
  {name:"Barnes & Noble",domain:"barnesandnoble.com",url:"https://www.barnesandnoble.com",cat:"Books & Collectibles"},
  {name:"Waterstones",domain:"waterstones.com",url:"https://www.waterstones.com",cat:"Books & Collectibles"},
  {name:"Funko",domain:"funko.com",url:"https://www.funko.com",cat:"Books & Collectibles"},
  // AUTO
  {name:"RockAuto",domain:"rockauto.com",url:"https://www.rockauto.com",cat:"Auto & Parts"},
  {name:"Parts Geek",domain:"partsgeek.com",url:"https://www.partsgeek.com",cat:"Auto & Parts"},
  // GROCERY
  {name:"Tesco",domain:"tesco.com",url:"https://www.tesco.com",cat:"Grocery & Pharmacy"},
  {name:"Sainsbury's",domain:"sainsburys.co.uk",url:"https://www.sainsburys.co.uk",cat:"Grocery & Pharmacy"},
  {name:"Waitrose",domain:"waitrose.com",url:"https://www.waitrose.com",cat:"Grocery & Pharmacy"},
  {name:"ASDA",domain:"asda.com",url:"https://www.asda.com",cat:"Grocery & Pharmacy"},
  // LIFESTYLE
  {name:"TK Maxx",domain:"tkmaxx.com",url:"https://www.tkmaxx.com",cat:"Lifestyle"},
]

const CATEGORIES: { name: string; icon: LucideIcon }[] = [
  { name: "Marketplace",         icon: ShoppingCart },
  { name: "Fashion & Apparel",   icon: Shirt        },
  { name: "Beauty & Skincare",   icon: Sparkles     },
  { name: "Electronics & Tech",  icon: Laptop       },
  { name: "Sports & Fitness",    icon: Dumbbell     },
  { name: "Home & Living",       icon: Home         },
  { name: "Health & Wellness",   icon: Leaf         },
  { name: "Kids & Baby",         icon: Baby         },
  { name: "Books & Collectibles",icon: BookOpen     },
  { name: "Auto & Parts",        icon: Car          },
  { name: "Grocery & Pharmacy",  icon: ShoppingBag  },
  { name: "Lifestyle",           icon: Star         },
]

const Brands = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const getCategoryCount = (catName: string) => {
    return BRANDS.filter(b => b.cat === catName).length
  }

  const filteredBrands = BRANDS.filter(b => {
    if (activeCategory) {
      if (b.cat !== activeCategory) return false
    }
    if (searchQuery) {
      return b.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return true
  })

  return (
    <section id="brands" className="fade-up" style={{ padding: 'var(--section-gap) 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: 'auto', padding: '0 var(--gutter)' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            BRANDS WE&apos;VE WORKED WITH
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.025em' }}>
            Looking for <em style={{ fontStyle: 'italic' }}>something specific</em>?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '580px', margin: 'auto', lineHeight: 1.6 }}>
            Browse some of the brands we&apos;ve already delivered to customers across Kampala — authentic products, sourced directly, no guesswork.
          </p>
          <div style={{ fontSize: '13px', color: 'var(--text-faint)', marginTop: '12px' }}>
            ✦ Don&apos;t see your brand? We&apos;re not limited to this list — just ask.
          </div>
        </div>

        {activeCategory === null ? (
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '24px' }}>
              Pick a category to browse familiar names — or just tell us what you want and we&apos;ll handle the rest.
            </p>
            <div className="cat-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '14px'
            }}>
              {CATEGORIES.map((cat, i) => {
                const Icon = cat.icon
                return (
                <div key={cat.name} className="cat-card fade-up visible" style={{
                  background: 'var(--surface)',
                  border: '1.5px solid var(--border)',
                  borderRadius: '16px',
                  padding: '26px 18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                  animationDelay: `${i * 40}ms`
                }}
                onClick={() => setActiveCategory(cat.name)}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,202,12,0.13)'
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  (e.currentTarget.querySelector('.underline-bar') as HTMLElement).style.transform = 'scaleX(1)'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)';
                  (e.currentTarget.querySelector('.underline-bar') as HTMLElement).style.transform = 'scaleX(0)'
                }}
                data-testid={`category-${cat.name}`}
                >
                  <Icon size={26} strokeWidth={1.5} color="var(--gold)" />
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>{cat.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-faint)', background: 'var(--surface-mid)', padding: '2px 8px', borderRadius: '10px' }}>
                    {getCategoryCount(cat.name)} stores
                  </div>
                  <div className="underline-bar" style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'var(--gold)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.2s',
                    transformOrigin: 'left'
                  }}></div>
                </div>
              )
              })}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <button
                onClick={() => { setActiveCategory(null); setSearchQuery('') }}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.color = 'var(--gold)'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
                data-testid="button-back-categories"
              >
                ← All Categories
              </button>

              <div style={{ fontSize: '13px', color: 'var(--text-faint)' }}>
                Stores › {activeCategory}
              </div>

              <div style={{ flexGrow: 1, minWidth: '200px', display: 'flex', position: 'relative' }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search brands..."
                  style={{
                    width: '100%',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '9999px',
                    padding: '10px 16px',
                    fontSize: '14px',
                    color: 'var(--text)',
                    outline: 'none'
                  }}
                  onFocus={e => e.currentTarget.style.outline = '2px solid var(--gold)'}
                  onBlur={e => e.currentTarget.style.outline = 'none'}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      color: 'var(--text-muted)'
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              {filteredBrands.length} {searchQuery ? 'matching' : ''} stores
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(148px, 1fr))',
              gap: '12px'
            }}>
              {filteredBrands.map((brand, i) => (
                <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" style={{
                  background: 'var(--surface)',
                  border: '1.5px solid var(--border)',
                  borderRadius: '12px',
                  padding: '22px 12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                  overflow: 'hidden'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(251,202,12,0.15)'
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  (e.currentTarget.querySelector('.visit-bar') as HTMLElement).style.bottom = '0'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)';
                  (e.currentTarget.querySelector('.visit-bar') as HTMLElement).style.bottom = '-24px'
                }}
                >
                  <BrandLogo domain={brand.domain} name={brand.name} />

                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)', textAlign: 'center' }}>
                    {brand.name}
                  </div>

                  <div className="visit-bar" style={{
                    position: 'absolute',
                    bottom: '-24px',
                    left: 0,
                    width: '100%',
                    height: '24px',
                    background: 'var(--gold)',
                    color: '#0A0A0B',
                    fontSize: '10px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'bottom 0.2s'
                  }}>
                    VISIT STORE →
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Brands
