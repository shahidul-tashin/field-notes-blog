import { Link } from 'react-router-dom'
import posts from '../data/posts.js'

export default function Home() {
  const recent = posts.slice(0, 3)

  return (
    <div>
      <section className="mb-16">
        <p className="stamp text-secondary mb-5">no. 001 — welcome</p>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight font-semibold mb-5">
          Short essays, kept like a card catalog.
        </h1>
        <p className="text-base-content/70 text-lg max-w-xl">
          Field Notes is a small, dated collection of things I noticed, fixed,
          or couldn't stop thinking about. No feed to scroll — just entries,
          filed one at a time.
        </p>
        <Link to="/blog" className="btn btn-primary mt-8 rounded-none">
          Browse the catalog →
        </Link>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-base-content/60 mb-5">
          Recently filed
        </h2>
        <div className="grid gap-5">
          {recent.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="catalog-card p-5 block hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="stamp text-primary">{post.tag}</span>
                <span className="font-mono text-xs text-base-content/50">{post.date}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-base-content/70 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
