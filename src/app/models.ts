export class Article {
  title?: string;
  content?: string;
}

export class Category {
  title?: string;
  articles?: Article [];
  articlesPerRow?: number;
}
