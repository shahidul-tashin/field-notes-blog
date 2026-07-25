export default function About() {
  return (
    <div>
      <p className="stamp text-secondary mb-5">card no. 000</p>
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6">About This Catalog</h1>
      <div className="space-y-5 text-base-content/85 leading-relaxed max-w-xl">
        <p>
          Field Notes is a personal log — short, dated entries instead of a
          bottomless feed. Replace this text with your own bio, the kind of
          things you write about, and a way for readers to reach you.
        </p>
        <p>
          Edit <code className="font-mono text-sm bg-base-200 px-1 rounded">src/pages/About.jsx</code> to
          make this page yours, and <code className="font-mono text-sm bg-base-200 px-1 rounded">src/data/posts.js</code> to
          add your own entries.
        </p>
      </div>
    </div>
  )
}
