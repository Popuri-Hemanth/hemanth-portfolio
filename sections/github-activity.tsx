"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
};

type ActivityPoint = { month: string; count: number };

export function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [activity, setActivity] = useState<ActivityPoint[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get<Repo[]>(
          "https://api.github.com/users/Popuri-Hemanth/repos",
          { params: { sort: "updated", per_page: 50 } }
        );
        const data = res.data || [];
        setRepos(data);
        const byMonth: Record<string, number> = {};
        data.forEach((repo) => {
          const d = new Date(repo.pushed_at);
          const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
          byMonth[key] = (byMonth[key] ?? 0) + 1;
        });
        setActivity(
          Object.entries(byMonth)
            .sort(([a], [b]) => (a > b ? 1 : -1))
            .map(([month, count]) => ({ month, count }))
        );
      } catch (err) {
        console.error(err);
        setError("Unable to load GitHub activity.");
      }
    }
    load();
  }, []);

  const topRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

  return (
    <section id="github" className="scroll-snap-section section-spacing">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="section-heading">
                <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
                GitHub
              </div>
              <h2 className="section-title">
                Code that <span className="accent-gradient-text">ships and evolves</span>.
              </h2>
              <p className="section-subtitle">
                Open-source work across embedded systems, digital design, and AI.
              </p>
            </div>
            <Button asChild variant="outline" className="border-cyan-400/50 text-sky-100 hover:bg-cyan-500/10">
              <a href="https://github.com/Popuri-Hemanth" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Profile
              </a>
            </Button>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_1.2fr]">
            <Card className="card-premium border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Commit activity</CardTitle>
              </CardHeader>
              <CardContent className="h-56">
                {activity.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-sm text-slate-400">
                    {error ?? "Loading..."}
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activity}>
                      <defs>
                        <linearGradient id="activityArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                      <YAxis tick={{ fill: "#94a3b8", fontSize: 10 }} allowDecimals={false} width={28} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#020617",
                          borderRadius: 12,
                          border: "1px solid rgba(148,163,184,0.5)",
                          fontSize: 11,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="count"
                        stroke="#38bdf8"
                        strokeWidth={2}
                        fill="url(#activityArea)"
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            <Card className="card-premium border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Repositories</CardTitle>
              </CardHeader>
              <CardContent>
                {topRepos.length === 0 ? (
                  <p className="text-sm text-slate-400">{error ?? "Loading..."}</p>
                ) : (
                  <div className="space-y-4">
                    {topRepos.map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="card-premium block rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-slate-100">{repo.name}</span>
                          <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-300">
                            ★ {repo.stargazers_count}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-400">
                          {repo.language ?? "Multiple"}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
