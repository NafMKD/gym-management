import { createContext, useContext, useEffect, useState } from 'react'
import { CommandMenu } from '@/components/command-menu'

const SearchContext = createContext(null)

export function SearchProvider({ children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandMenu />
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const ctx = useContext(SearchContext)
  if (!ctx) {
    throw new Error('useSearch must be used within <SearchProvider>')
  }
  return ctx
}
