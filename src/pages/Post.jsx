import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts.js'

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="text-center py-20">
        <p className="stamp text-primary mb-4">card missing</p>
        <h1 className="font-serif text-3xl mb-4">This entry isn't filed here.</h1>
        <Link to="/blog" className="link link-secondary font-mono text-sm">← back to the catalog</Link>
      </div>
    )
  }

  return (
    <article>
      <Link to="/blog" className="font-mono text-xs uppercase tracking-widest text-base-content/50 hover:text-primary">
        ← back to the catalog
      </Link>

      <div className="flex items-center gap-3 mt-6 mb-3">
        <span className="stamp text-primary">{post.tag}</span>
        <span className="font-mono text-xs text-base-content/50">{post.date}</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8">{post.title}</h1>

      <div className="prose-none space-y-5">
        {post.content.map((para, i) => (
          <p key={i} className="text-base-content/85 leading-relaxed">{para}</p>
        ))}
      </div>
    </article>
  )
}
