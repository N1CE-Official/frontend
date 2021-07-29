import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const posts = [
      {
        id: '1',
        title: 'Article 1',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '2',
        title: 'Article 2',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '3',
        title: 'Article 3',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '4',
        title: 'Article 4',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '5',
        title: 'Article 5',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '6',
        title: 'Article 6',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '7',
        title: 'Article 7',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: '8',
        title: 'Article 8',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      },{
        id: 't1',
        title: 'Trending Article 1',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: 't2',
        title: 'Trending Article 2',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }, {
        id: 't3',
        title: 'Trending Article 3',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }
    ];
    const categories = [{
      title: 'Blockchain', articles: [{
        id: '1',
        title: 'Article 1',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: '2',
        title: 'Article 2',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: '3',
        title: 'Article 3',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: '4',
        title: 'Article 4',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }]
    }, {
      title: 'DeFi', articles: [{
        id: '5',
        title: 'Article 5',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: '6',
        title: 'Article 6',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: '7',
        title: 'Article 7',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: '8',
        title: 'Article 8',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }]
    }];
    const inEvidence = {
      title: 'Trending', articles: [{
        id: 't1',
        title: 'Trending Article 1',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: 't2',
        title: 'Trending Article 2',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }, {
        id: 't3',
        title: 'Trending Article 3',
        content: '',
        expert: {
          id: 'Expert 1',
          name: 'Expert 1',
          picture: 'https://www.w3schools.com/howto/img_avatar2.png'
        }
      }], articlesPerRow: 3
    };
    return {posts, categories, inEvidence};
  }
}
