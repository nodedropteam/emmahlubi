"use client"

import { useEffect, useState } from "react"

export default function DocxViewer() {
    const [content, setContent] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch("/api/credits")
                const data = await response.json()

                if (data.success) {
                    setContent(data.content)
                } else {
                    setError(data.error || "Failed to load document")
                }
            } catch (err) {
                setError("Error loading document")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchDocument()
    }, [])

    return (
        <div className="py-12 pt-[160px] max-w-[60ch]">
            {loading && (
                <div className="flex justify-center my-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            )}

            {error && !loading && (
                <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded-md">{error}</div>
            )}

            {content && !loading && (
                <div>
                    <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            )}
        </div>
    )
}

