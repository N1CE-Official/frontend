export class BlogPost {
  id: string = '';
  title?: string;
  content?: string;
  snippet?: string;
  expertId: string = '';
  featuredImg?: string;
  category: string = '';
  publishingTime?: string;
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
  memberSince: string = '';
}

export class Expert extends User{
  shortBio?: string;
  expertise: string [] = [];
  rating: number = 0;
  reviews: number = 0;
  candidatureVotes?: number = 0;
  candidatureEndTime?: string;
  candidatureStakedAmount?: number = 0;
  expertSince?: string;
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
  publishingTime?: string;
}

export class ServiceReview {
  id: string = '';
  serviceId: string = '';
  userId: string = '';
  rating: number = 0;
  comment: string = '';
  publishingTime?: string;
}

export class SearchResult {
  type: string = '';
  title: string = '';
  link: string = '';
  featuredImg?: string;
  snippet: string = '';
  expertId: string = '';
}

export class Order {
  id: string = '';
  userId: string = '';
  serviceId: string = '';
  startDate: string = '';
  endDate?: string;
  price: number = 0;
}

export class UserFavoriteService {
  userId: string = '';
  serviceId: string = '';
}

export class UserFavoritePost {
  userId: string = '';
  postId: string = '';
}
