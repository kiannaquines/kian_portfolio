"use client";

import React from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
  fork: boolean; // added to allow filtering non-fork repos
};

export default function GitHubProjects() {
  const [repos, setRepos] = React.useState<Repo[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);

  const perPage = 12;

  const loadRepos = React.useCallback(async (nextPage: number) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/github/repos?page=${nextPage}&per_page=${perPage}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const newRepos: Repo[] = data.repos || [];
      setRepos((prev) => [...prev, ...newRepos]);
      setPage(nextPage);
      // If API returned fewer than requested, we've reached the end
      if (newRepos.length < perPage) setHasMore(false);
    } catch (e: any) {
      setError(e?.message || "Failed to load repositories");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadRepos(1);
  }, [loadRepos]);

  return (
    <section id="github" className="w-full px-4 sm:px-10 lg:px-28 pt-10 lg:pt-20 mx-auto">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-neutral-900 dark:text-white mb-4"
        >
          My GitHub Projects
        </motion.h2>
        <p className="text-center text-neutral-700 dark:text-neutral-300 text-lg mb-8 max-w-2xl mx-auto p-2 sm:p-0">
          Public repositories fetched live from GitHub (excluding forks).
        </p>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="h-40 rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="p-3 rounded-md bg-red-500/10 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-500/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                    {repo.name}
                  </h3>
                  <span className="text-xs text-neutral-400 whitespace-nowrap">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
                {repo.description && (
                  <p className="mt-2 text-sm text-neutral-400 line-clamp-3">{repo.description}</p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                  {repo.language && (
                    <span className="px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
                      {repo.language}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
                      forks: {repo.forks_count}
                    </span>
                  )}
                  {repo.topics?.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                {repo.homepage && (
                  <div className="mt-3 text-xs text-violet-400 underline underline-offset-4">
                    {repo.homepage}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}

        {!loading && hasMore && (
          <div className="flex justify-center mt-4 mb-4">
            <button
              onClick={() => loadRepos(page + 1)}
              className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

        {!hasMore && repos.length > 0 && (
          <p className="mt-6 text-center text-sm text-neutral-500">All repositories loaded.</p>
        )}
      </div>
    </section>
  );
}

