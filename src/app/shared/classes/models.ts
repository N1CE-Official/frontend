export class BlogPost {
  id: string = '';
  title?: string;
  content?: string;
  snippet?: string;
  expertId: string = '';
  featuredImg?: string;
  category?: string;
}

export class BlogCategory {
  title?: string;
  articles?: string [];
  articlesPerRow?: number;
}

export class Expert {
  id: string = '';
  name?: string;
  picture?: string;
  shortBio?: string;
  expertise: string [] = [];
  rating: number = 0;
  reviews: number = 0;
}

export class ServiceCategory {
  title: string = '';
  services?: string [];
}

export class Service {
  id: string = '';
  title?: string;
  content?: string;
  expertId: string = '';
  featuredImg?: string;
  category?: string;
  startingPrice?: number;
}
