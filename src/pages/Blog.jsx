import { Link } from 'react-router-dom'
import posts from '../data/posts.js'

export default function Blog() {
  return (
    <div>
      <p className="stamp text-secondary mb-5">the full catalog</p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-10">All Entries</h1>

      <div className="grid gap-5">
        {posts.map((post) => (
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
    </div>
  )
}
