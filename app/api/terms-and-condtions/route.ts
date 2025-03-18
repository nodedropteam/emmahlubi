import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import mammoth from "mammoth"

export async function GET() {
    try {
        // Path to your .docx file in the project
        // You can change this path to point to your actual document
        const filePath = path.join(process.cwd(), "public", "Terms and Conditions.docx")

        // Read the file
        const fileBuffer = await fs.readFile(filePath)

        // Convert the document to HTML
        const result = await mammoth.convertToHtml({ buffer: fileBuffer })

        // Return the HTML content
        return NextResponse.json({
            content: result.value,
            success: true,
        })
    } catch (error) {
        console.error("Error processing document:", error)
        return NextResponse.json(
            {
                error: "Failed to process document",
                success: false,
            },
            { status: 500 },
        )
    }
}

