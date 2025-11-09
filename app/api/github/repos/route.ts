import { NextResponse } from "next/server";

const GITHUB_USER = "kiannaquines";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") || "1");
    const per_page = Math.min(Number(searchParams.get("per_page") || "12"), 100);

    const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=${per_page}&page=${page}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      // Cache on the server for 1 hour
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: "GitHub fetch failed", detail: text }, { status: res.status });
    }

    const repos = await res.json();
    // Shape data and exclude forks
    const data = (repos as any[])
      .filter((r) => !r.fork)
      .map((r) => ({
        id: r.id,
        name: r.name,
        full_name: r.full_name,
        description: r.description,
        html_url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        topics: r.topics ?? [],
        updated_at: r.updated_at,
        fork: r.fork,
      }));

    return NextResponse.json({ repos: data, page, per_page });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}
