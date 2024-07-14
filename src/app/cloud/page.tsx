"use client";
import { createHash } from "crypto";
import React, { useState, FormEvent } from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'

const yourString = "banana";
const hash = createHash("sha256").update(yourString).digest("hex");

export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            // Handle response if necessary
            const data = await response.json()
            // ...
        } catch (error: any) {
            // Capture the error message to display to the user
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="classic p-4 container">
            <h1 className="text-2xl font-bold mb-4">Cloud</h1>
            <form className="border border-white" onSubmit={onSubmit}>
                <input type="text" className="text-white dark:text-black border-none bg-black dark:bg-white rounded-md px-1" id="cloud-password-input" name="cloud-password" />
                <br />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </main>
    );
}
