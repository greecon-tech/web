import { formatPostDate, type BlogPost } from "../lib/blog";
import { BLOG_URL } from "../lib/seo";

/** A short list of article cards from the Greecon Blog. Renders nothing when there are no articles. */
export function BlogTeaser({ id, posts, showAll = false }: { id: string; posts: BlogPost[]; showAll?: boolean }) {
  if (posts.length === 0) return null;

  return (
    <section className="blog-teaser wrap" aria-labelledby={id}>
      <div className="blog-teaser__head">
        <h2 id={id}>From the Blog</h2>
        {showAll ? (
          <a className="platform-link" href={`${BLOG_URL}/blog`}>
            All articles →
          </a>
        ) : null}
      </div>
      <ul className="blog-teaser__list">
        {posts.map((post) => (
          <li key={post.url}>
            <article className="blog-card">
              <p className="blog-card__meta">
                {post.category ? <span className="blog-card__category">{post.category}</span> : <span />}
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </p>
              <h3>
                <a href={post.url}>{post.title}</a>
              </h3>
              {post.description ? <p className="blog-card__summary">{post.description}</p> : null}
              <span className="blog-card__more" aria-hidden="true">
                Read article →
              </span>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
