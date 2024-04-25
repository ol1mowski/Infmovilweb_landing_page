'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'

function ReactQueryProvider({ children }: { children: ReactNode}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        { children }
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
