import { useParams } from 'react-router-dom';
import Button from '../components/button';
import articles from '../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">Article not found</h1>
            <Button to="/articles" className="mt-6">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">{article.title}</p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">{article.title}</h1>
          </div>
          <p className="mt-2 text-sm text-zinc-700">{article.description}</p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-[3] items-center justify-center rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200" />

          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-700 whitespace-pre-wrap">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 pt-6">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Button to="/articles">Back to Articles</Button>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;