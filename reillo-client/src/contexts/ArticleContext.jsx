import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import defaultArticles from '../assets/article-content.js';

const STORAGE_KEY = 'reillo_articles';

const ArticleContext = createContext({
  articles: [],
  addArticle: () => {},
});

const slugify = (value) =>
  value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const normalizeArticles = (articleList) =>
  articleList.map((article) => ({
    ...article,
    published: article.published ?? true,
  }));

const getInitialArticles = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length) return normalizeArticles(parsed);
    }
  } catch (error) {
    console.warn('Could not load saved articles:', error);
  }
  return normalizeArticles(defaultArticles);
};

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(getInitialArticles);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    } catch (error) {
      console.warn('Could not save articles:', error);
    }
  }, [articles]);

  const addArticle = ({ title, name, description, imageUrl, content }) => {
    const slug = slugify(name || title);
    if (!title || !description || !slug) return;

    const newArticle = {
      name: slug,
      title,
      description,
      imageUrl: imageUrl || '',
      published: true,
      content:
        content?.trim().length > 0
          ? [content.trim()]
          : [description, 'Read the featured article for more details.'],
    };

    setArticles((previous) => [newArticle, ...previous]);
  };

  const toggleArticlePublished = (name) => {
    setArticles((previous) =>
      previous.map((article) =>
        article.name === name ? { ...article, published: !article.published } : article
      )
    );
  };

  const value = useMemo(() => ({ articles, addArticle, toggleArticlePublished }), [articles]);

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
};

export const useArticles = () => useContext(ArticleContext);
