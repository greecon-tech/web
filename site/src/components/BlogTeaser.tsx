import { LOCALE_INFO, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { getBlogBase, type BlogPost } from "../lib/blog";

/**
 * A short list of article cards from the Greecon Blog. Renders nothing when there are no articles.
 * The cards are in the page's language when the blog has it. Otherwise the English articles are shown, their text
 * is marked with its own language, and a short note says so.
 */
export async function BlogTeaser({
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
  const base = await getBlogBase(locale);
  const pageLang = LOCALE_INFO[locale].htmlLang;
  const otherLanguage = posts.some((post) => post.lang !== pageLang);
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
          <a className="platform-link" href={`${base}/blog`}>
            {t.blog.allArticles}
          </a>
        ) : null}
      </div>
      {otherLanguage && t.blog.englishOnly ? <p className="blog-teaser__note">{t.blog.englishOnly}</p> : null}
      <ul className="blog-teaser__list">
        {posts.map((post) => {
          const textLang = post.lang !== pageLang ? post.lang : undefined;
          return (
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
                <h3 lang={textLang}>
                  <a href={post.url}>{post.title}</a>
                </h3>
                {post.description ? (
                  <p className="blog-card__summary" lang={textLang}>
                    {post.description}
                  </p>
                ) : null}
                <span className="blog-card__more" aria-hidden="true">
                  {t.blog.readArticle}
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
