import { Link } from 'react-router-dom';
import Button from './button';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <Link to={`/articles/${article.name}`} key={article.name} className="article-card">
          <div className="article-image">
            <div className="article-icon" />
          </div>
          <div className="article-content">
            <p className="article-label">Article {String(index + 1).padStart(2, '0')}</p>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">
              {article.description}
            </p>
            <Button className="mt-4">Read More</Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;