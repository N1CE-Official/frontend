export class BlogPost {
  id: string = '';
  title?: string;
  content?: string;
  snippet?: string;
  expertId: string = '';
  featuredImg?: string;
  category: string = '';
}

export class BlogCategory {
  title: string = '';
  articles?: string [];
  articlesPerRow?: number;
}

export class User {
  id: string = '';
  name?: string;
  picture?: string;
}

export class Expert extends User{
  shortBio?: string;
  expertise: string [] = [];
  rating: number = 0;
  reviews: number = 0;
  candidatureVotes?: number = 0;
}

export class ServiceCategory {
  title: string = '';
  icon: any;
  services?: string [];
}

export class ExpertPlatformService {
  id: string = '';
  title?: string;
  content?: string;
  expertId: string = '';
  featuredImg?: string;
  category?: string;
  startingPrice?: number;
}

export class ServiceReview {
  id: string = '';
  serviceId: string = '';
  userId: string = '';
  rating: number = 0;
  comment: string = '';
}

export class SearchResult {
  type: string = '';
  title: string = '';
  link: string = '';
  featuredImg?: string;
  snippet: string = '';
  expertId: string = '';
}
