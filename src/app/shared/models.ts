export class Article {
  id?: string;
  title?: string;
  content?: string;
  snippet?: string;
  expert?: Expert;
  featuredImg?: string;
  category?: string;
}

export class Category {
  title?: string;
  articles?: Article [];
  articlesPerRow?: number;
}

export class Expert {
  id?: string;
  name?: string;
  picture?: string;
  expertise?: string [];
}
