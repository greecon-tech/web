import { LOCALE_INFO, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { type BlogPost } from "../lib/blog";
import { BLOG_URL } from "../lib/seo";

/**
 * A short list of article cards from the Greecon Blog. Renders nothing when there are no articles.
 * The blog is published in English: on pages in another language the article text is marked lang="en"
 * and a short note says so.
 */
export function BlogTeaser({
  id,
  locale,
  posts,
  showAll = false
}: {
  id: string;
  locale: Locale;
  posts: BlogPost[];
  showAll?: boolean;
}) {
  if (posts.length === 0) return null;
  const t = getDictionary(locale);
  const dateFormat = new Intl.DateTimeFormat(LOCALE_INFO[locale].intl, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });

  return (
    <section className="blog-teaser wrap" aria-labelledby={id}>
      <div className="blog-teaser__head">
        <h2 id={id}>{t.blog.heading}</h2>
        {showAll ? (
          <a className="platform-link" href={`${BLOG_URL}/blog`}>
            {t.blog.allArticles}
          </a>
        ) : null}
      </div>
      {t.blog.englishOnly ? <p className="blog-teaser__note">{t.blog.englishOnly}</p> : null}
      <ul className="blog-teaser__list">
        {posts.map((post) => (
          <li key={post.url}>
            <article className="blog-card">
              <p className="blog-card__meta">
                {post.category ? (
                  <span className="blog-card__category">{t.blog.categories[post.category] ?? post.category}</span>
                ) : (
                  <span />
                )}
                <time dateTime={post.date}>{dateFormat.format(new Date(`${post.date}T00:00:00Z`))}</time>
              </p>
              <h3 lang="en">
                <a href={post.url}>{post.title}</a>
              </h3>
              {post.description ? (
                <p className="blog-card__summary" lang="en">
                  {post.description}
                </p>
              ) : null}
              <span className="blog-card__more" aria-hidden="true">
                {t.blog.readArticle}
              </span>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
