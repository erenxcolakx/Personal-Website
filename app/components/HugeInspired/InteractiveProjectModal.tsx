'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Loader } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  color: string
  year: string
  isInteractive: boolean
  iframeUrl?: string
  fallbackMessage?: string
}

interface InteractiveProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
  onOpenExternal: () => void
}

export function InteractiveProjectModal({ 
  project, 
  isOpen, 
  onClose, 
  onOpenExternal 
}: InteractiveProjectModalProps) {
  const [iframeLoading, setIframeLoading] = useState(true)
  const [iframeError, setIframeError] = useState(false)
  // Use ref for timeout to avoid stale closure & dependency noise
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen && project.iframeUrl) {
      setIframeLoading(true)
      setIframeError(false)
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
      loadingTimeoutRef.current = setTimeout(() => {
        setIframeLoading(false)
        setIframeError(true)
      }, 10000) // 10s timeout
    } else {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
        loadingTimeoutRef.current = null
      }
    }
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
        loadingTimeoutRef.current = null
      }
    }
  }, [isOpen, project.iframeUrl])

  const handleIframeLoad = () => {
    setIframeLoading(false)
    setIframeError(false)
    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
  }

  const handleIframeError = () => {
    setIframeLoading(false)
    setIframeError(true)
    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
  }

  const handleClose = useCallback(() => {
    setIframeLoading(true)
    setIframeError(false)
    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
    onClose()
  }, [onClose])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose()
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.category} • {project.year}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={onOpenExternal}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  aria-label="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </button>
                
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex-1 h-full">
              {/* Loading State */}
              {iframeLoading && !iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <div className="text-center">
                    <Loader className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Loading interactive demo...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <div className="text-center max-w-md mx-auto p-6">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Preview Not Available
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {project.fallbackMessage || "This project cannot be displayed in an iframe due to security restrictions."}
                    </p>
                    <button
                      onClick={onOpenExternal}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 mx-auto"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Visit Project</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Iframe */}
              {project.iframeUrl && (
                <iframe
                  src={project.iframeUrl}
                  className={`w-full h-full border-0 ${iframeLoading || iframeError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  title={`${project.title} - Interactive Demo`}
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                  loading="lazy"
                />
              )}
            </div>

            {/* Technology Stack Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}