import { NextResponse } from 'next/server'

// Simple in-memory cache (clears on redeploy)
let cached: { data: any; ts: number } | null = null
const TTL = 1000 * 60 * 30 // 30 minutes

async function fetchGitHub(username: string) {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github+json'
  }
  // Optional: If a GITHUB_TOKEN env is provided, use it to raise rate limits
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }
  const userRes = await fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 1800 } })
  if (!userRes.ok) throw new Error('User fetch failed')
  const user = await userRes.json()

  // Public repos count from user.public_repos (includes forks) — optionally filter later via search
  // We also fetch contributions via a fallback heuristic (not exact without GraphQL token)
  return {
    publicRepos: user.public_repos ?? 0,
    followers: user.followers ?? 0,
    following: user.following ?? 0,
    publicGists: user.public_gists ?? 0,
    // Basic derived metrics
    approxImpact: (user.followers ?? 0) * 3 + (user.public_repos ?? 0),
    accountAgeYears: Math.max(1, Math.round((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24 * 365)))
  }
}

export async function GET() {
  const username = 'erenxcolakx'
  try {
    if (cached && Date.now() - cached.ts < TTL) {
      return NextResponse.json({ ok: true, cached: true, ...cached.data })
    }
    const data = await fetchGitHub(username)
    cached = { data, ts: Date.now() }
    return NextResponse.json({ ok: true, cached: false, ...data }, { headers: { 'Cache-Control': 's-maxage=1800, stale-while-revalidate=300' } })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
  }
}
