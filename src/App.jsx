import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'

// Cinematic placeholder images - dark moody landscapes
const placeholderImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1920&q=80',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80',
  'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80',
  'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=1920&q=80',
  'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
  'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1920&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80',
  'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1920&q=80',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1920&q=80',
  'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80',
  'https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1920&q=80',
  'https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=1920&q=80',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80',
  'https://images.unsplash.com/photo-1518173946687-a4c036bc1e3e?w=1920&q=80',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1920&q=80',
  'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=1920&q=80',
  'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1920&q=80',
]

const eventStatements = [
  "He stated that Naga Lade was angry.",
  "He said the Platina battery should not have been installed.",
  "He spoke against us after we measured and requested our share of the Vairan field.",
  "Pomegranate saplings were not delivered for three months.",
  "Urea and pesticide were not delivered for three months.",
  "The borewell motor was kept running without supplying water.",
  "His uncle's name was used repeatedly to influence decisions.",
  "The borewell pipe was broken.",
  "Statements about my mother were shared with others causing conflict.",
  "After we requested our share of Vairan, he reacted negatively.",
  "The expenses for the water motor and field were paid by us.",
  "After a vehicle incident, information was circulated in the village.",
  "I was regularly taken along, but support was not provided for my work.",
  "Farming tools such as leaves and hoes were kept hidden.",
  "Even when farm items were damaged, payment was demanded from us.",
  "Borrowed money was not returned.",
  "I was asked to bring market goods and faced issues during payment.",
  "When our vehicle was not working, our milk was not collected.",
  "The vehicle was frequently used for their work during milk trips.",
  "The irrigation pipe in the pomegranate field was removed after disagreement.",
  "During corn distribution, better quality was taken and lower quality was given to us.",
  "Calls were not answered despite being at home.",
  "Corn from the field was taken without informing us.",
  "Motor and electrical wires were disconnected.",
  "The motor was left running freely without being turned off.",
  "Statements were made claiming multiple ownership changes.",
  "Private discussions were later denied and reversed publicly.",
  "Field lateral lines and pipes were damaged.",
]

// Custom Hooks
function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return { scrollYProgress, scaleY }
}

// Icon Components
function SearchIcon({ className = '' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function ArrowUpRightIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function ChevronDownIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

// Hero Section Component
function HeroSection({ totalEvents }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-20">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
      
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-caption text-white/40 mb-6 block"
        >
          A Comprehensive Record
        </motion.span>
        
        <h1 className="text-display text-gradient-gold mb-6">
          Documented Events
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body-large text-white/50 max-w-2xl mx-auto font-light"
        >
          A chronological anthology of statements, observations, and recorded incidents 
          presented with visual documentation.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-12 mt-16"
      >
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-4xl md:text-5xl font-extralight text-white/80 block"
          >
            {totalEvents}
          </motion.span>
          <span className="text-caption text-white/30 mt-2 block">Entries</span>
        </div>
        <div className="w-px h-12 bg-white/10" />
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-4xl md:text-5xl font-extralight text-white/80 block"
          >
            {placeholderImages.length}
          </motion.span>
          <span className="text-caption text-white/30 mt-2 block">Visuals</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-caption text-white/30">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Search Bar Component
function SearchBar({ onSearch, searchQuery, resultCount }) {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="sticky top-0 z-40 w-full py-8 px-6 md:px-12 glass-premium border-b border-white/5"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative group"
          animate={{
            scale: isFocused ? 1.01 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <SearchIcon className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-amber-200/60' : 'text-white/30'}`} />
          </div>
          <input
            type="text"
            placeholder="Search entries by keyword..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full search-input-premium rounded-2xl py-4 pl-14 pr-32 
                     text-white/80 placeholder-white/30 text-sm
                     focus:outline-none"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            {searchQuery ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-caption text-amber-200/60 bg-amber-200/10 px-3 py-1.5 rounded-full"
              >
                {resultCount} found
              </motion.span>
            ) : (
              <span className="text-caption text-white/20 px-3">
                Press / to focus
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Search Result Item Component
function SearchResult({ statement, index, imageUrl, onClick, resultNumber }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      onClick={onClick}
      className="flex items-center gap-4 p-4 rounded-xl cursor-pointer 
               bg-white/[0.03] border border-white/[0.06] 
               hover:bg-white/[0.06] hover:border-white/[0.1]
               transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
        <img 
          src={imageUrl} 
          alt="" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors line-clamp-2 leading-relaxed">
          {statement}
        </p>
      </div>
      <ArrowUpRightIcon className="w-4 h-4 text-white/20 group-hover:text-amber-200/60 transition-colors flex-shrink-0" />
    </motion.div>
  )
}

// Search Results Dropdown Component
function SearchResults({ results, searchQuery, onClear }) {
  if (!searchQuery) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="absolute top-full left-0 right-0 max-w-3xl mx-auto mt-3 px-6 md:px-12 z-50"
    >
      <div className="glass-premium rounded-2xl p-4 shadow-2xl border border-white/10">
        {results.length > 0 ? (
          <div className="space-y-2 max-h-[60vh] overflow-y-auto scrollbar-smooth">
            <AnimatePresence mode="popLayout">
              {results.map((result, index) => (
                <SearchResult
                  key={result.index}
                  statement={result.statement}
                  index={index}
                  imageUrl={placeholderImages[result.index % placeholderImages.length]}
                  onClick={() => {
                    const element = document.getElementById(`event-${result.index}`)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      onClear()
                    }
                  }}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-white/40">
              No entries match "<span className="text-white/60">{searchQuery}</span>"
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Scroll Progress Indicator Component
function ScrollProgress() {
  const { scaleY } = useScrollProgress()
  
  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 w-[2px] h-40 bg-white/5 rounded-full z-50 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="w-full bg-gradient-to-b from-amber-200/40 to-amber-200/20 rounded-full origin-top"
        style={{ 
          scaleY,
          height: '100%'
        }}
      />
    </motion.div>
  )
}

// Event Section Component
function EventSection({ index, statement, imageUrl, isEven }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98])
  
  return (
    <motion.section
      ref={ref}
      id={`event-${index}`}
      style={{ opacity, scale }}
      className="relative w-full py-12 md:py-20"
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
        
        {/* Image Side */}
        <motion.div 
          className="w-full lg:w-1/2"
          style={{ y }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative group"
          >
            {/* Image Number Badge */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`absolute ${isEven ? '-left-4' : '-right-4'} top-8 z-10 number-badge rounded-full px-4 py-2`}
            >
              <span className="text-caption text-amber-200/70">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
            
            {/* Main Image Container */}
            <div className="image-container rounded-2xl overflow-hidden shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={imageUrl}
                  alt={`Visual documentation ${index + 1}`}
                  className="w-full h-full object-cover image-cinematic"
                  loading="lazy"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </div>
            
            {/* Decorative frame */}
            <div className={`absolute -inset-3 border border-white/5 rounded-3xl pointer-events-none ${isEven ? '-rotate-1' : 'rotate-1'}`} />
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          className="w-full lg:w-1/2 lg:px-8"
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Entry Number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-amber-200/30" />
            <span className="text-caption text-amber-200/50">Entry {index + 1}</span>
          </motion.div>
          
          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-large text-white/70 font-light leading-[1.8] tracking-wide"
          >
            {statement}
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`w-16 h-px bg-gradient-to-r from-amber-200/30 to-transparent mt-8 origin-left`}
          />
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="h-px divider-animated origin-center"
        />
      </div>
    </motion.section>
  )
}

// Ending Section
function EndingSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full py-32 md:py-48"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-8"
        >
          <span className="text-caption text-white/40">End</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/30 font-light text-lg"
        >
          Documentation complete
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto mt-12"
        />
      </div>
    </motion.section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-amber-200/40" />
          <span className="text-caption text-white/30">Documented Events</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-white/20 font-light"
        >
          Preserving records with integrity
        </motion.p>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [events] = useState(eventStatements)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  // Filter events based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = eventStatements
      .map((statement, index) => ({ statement, index }))
      .filter(item => 
        item.statement.toLowerCase().includes(query)
      )
      .slice(0, 10)

    setFilteredResults(results)
  }, [searchQuery])

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault()
        const searchInput = document.querySelector('input[type="text"]')
        if (searchInput) searchInput.focus()
      }
      if (e.key === 'Escape') {
        clearSearch()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const clearSearch = () => {
    setSearchQuery('')
    setFilteredResults([])
  }

  return (
    <div className="relative min-h-screen bg-[#0c0c0e]">
      {/* Ambient Background Gradient */}
      <div className="ambient-gradient" />
      
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection totalEvents={events.length} />

        {/* Search Bar */}
        <div className="relative">
          <SearchBar 
            onSearch={setSearchQuery} 
            searchQuery={searchQuery}
            resultCount={filteredResults.length}
          />
          <AnimatePresence>
            {searchQuery && (
              <SearchResults 
                results={filteredResults} 
                searchQuery={searchQuery}
                onClear={clearSearch}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Event Sections */}
        <div className="pt-12">
          {events.map((statement, index) => (
            <EventSection
              key={index}
              index={index}
              statement={statement}
              imageUrl={placeholderImages[index % placeholderImages.length]}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* Ending Section */}
        <EndingSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default App
