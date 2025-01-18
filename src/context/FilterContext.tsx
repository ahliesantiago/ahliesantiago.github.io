'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface FilterContextType {
  techFilter: string | null
  statusFilter: string | null
  setTechFilter: (filter: string | null) => void
  setStatusFilter: (filter: string | null) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [techFilter, setTechFilter] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  return (
    <FilterContext.Provider value={{ techFilter, statusFilter, setTechFilter, setStatusFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
} 