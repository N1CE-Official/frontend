import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BlogCategory, BlogPost, Expert, Service, ServiceCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const posts: BlogPost[] = [
      {
        id: '1',
        title: 'Article 1',
        content: '',
        expertId: 'Expert 1',
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '2',
        title: 'Article 2',
        content: '',
        expertId: 'Expert 3',
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '3',
        title: 'Article 3',
        content: '',
        expertId: 'Expert 2',
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '4',
        title: 'Article 4',
        content: '',
        expertId: 'Expert 1',
        category: 'Blockchain',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '5',
        title: 'Article 5',
        content: '',
        expertId: 'Expert 3',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '6',
        title: 'Article 6',
        content: '',
        expertId: 'Expert 1',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '7',
        title: 'Article 7',
        content: '',
        expertId: 'Expert 2',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: '8',
        title: 'Article 8',
        content: '',
        expertId: 'Expert 1',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: 't1',
        title: 'Trending Article 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis condimentum quam. Sed sed accumsan diam. Curabitur sed nisi malesuada, dignissim leo in, semper metus. Donec elementum leo at feugiat faucibus. Suspendisse volutpat ultricies erat, et convallis urna hendrerit id. Donec id elementum dolor, non condimentum dui. Nulla magna erat, pulvinar in felis a, dapibus rhoncus ipsum. Nulla non aliquam augue, sit amet mattis justo. Maecenas eu sapien in felis mollis faucibus malesuada ornare risus. Phasellus sed augue fringilla, feugiat lorem vitae, tempor arcu. Morbi ipsum velit, volutpat at lobortis ac, viverra ac risus.\n' +
          '\n' +
          'Nam tincidunt, massa eu congue imperdiet, neque arcu ullamcorper massa, eu ullamcorper mi eros id sapien. Vestibulum sagittis sem magna, sit amet molestie velit tristique in. Morbi vulputate nec neque eget commodo. Proin pharetra magna et est tempor, eget dignissim magna congue. Cras euismod pretium ullamcorper. Vivamus consectetur venenatis luctus. Ut nec tempor massa. Etiam in justo velit. Aenean porta sagittis congue. Donec sagittis ornare varius.\n' +
          '\n' +
          'Curabitur vitae lacus elementum arcu laoreet malesuada eget sed libero. Nullam pellentesque orci eget dui aliquam, a interdum ante blandit. Vestibulum nunc odio, imperdiet ac ex ut, aliquet vestibulum nisi. Maecenas commodo mi in aliquet pellentesque. Praesent bibendum felis at luctus vehicula. Aliquam sodales leo nec pulvinar dapibus. Fusce imperdiet velit et volutpat tincidunt. Maecenas tristique turpis at enim vestibulum ultricies. Cras tristique consequat augue, euismod posuere metus interdum non.\n' +
          '\n' +
          'Mauris augue nibh, elementum vitae sagittis vitae, imperdiet vel leo. Sed eu diam cursus, maximus justo nec, gravida ipsum. Quisque condimentum orci nunc. Duis sit amet elit eu lorem dictum maximus in at dui. Donec imperdiet neque sit amet ex iaculis semper. Vestibulum rhoncus et magna in condimentum. Duis ultricies interdum commodo. Aliquam luctus mattis semper. Donec eu ex quis nisi ornare consectetur quis nec nisi. Vivamus fermentum ullamcorper nisl, eu tincidunt nisi tempor in. In pellentesque, tortor eget aliquet aliquet, dui massa condimentum massa, sodales pharetra lectus augue vitae elit. Proin ac commodo eros. Nunc auctor auctor lobortis. Etiam vitae orci mauris.\n' +
          '\n' +
          'Suspendisse potenti. Nullam ultricies, velit quis semper tristique, tortor elit vestibulum augue, a hendrerit mauris tortor sed felis. Ut aliquet mauris quam, in dignissim eros imperdiet dignissim. Proin pulvinar magna placerat arcu tincidunt faucibus. Sed tincidunt aliquam tellus, eu eleifend urna pharetra eu. Nam fringilla justo ut orci dictum pretium. Sed laoreet tristique dui ut consequat. Nam sollicitudin ipsum magna, non ultrices lacus tincidunt a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec vehicula purus id urna efficitur sollicitudin. Vivamus et lacus libero. Aliquam varius sem in luctus tristique.\n' +
          '\n' +
          'Suspendisse vel rutrum lorem. Ut ut pharetra justo. Sed vitae nisi eu neque commodo facilisis at a erat. Duis sagittis, velit in porttitor accumsan, risus urna facilisis ante, ac dictum nisl metus ut tellus. Sed nulla libero, tristique a efficitur ac, iaculis a arcu. Donec tincidunt vehicula tincidunt. Proin eu purus in justo condimentum hendrerit in mattis est. Sed varius sapien nulla, in venenatis elit sollicitudin quis. Quisque diam lectus, tincidunt ut varius sed, hendrerit sed purus.\n' +
          '\n' +
          'Integer et sagittis nisi. Nunc ac eros in urna lacinia pharetra et eu massa. Nunc facilisis at erat a finibus. Etiam euismod dignissim purus ac fermentum. Nullam elementum ipsum id finibus sodales. Nunc elementum quam ac sapien viverra aliquet. Suspendisse scelerisque magna leo. Vestibulum ullamcorper sodales felis vel feugiat. Aenean elementum varius turpis, et facilisis nibh lacinia nec. Proin consectetur vestibulum magna. Praesent bibendum ornare urna sed efficitur. Praesent eros purus, maximus in volutpat a, accumsan sed lorem. Fusce iaculis facilisis dictum. Aliquam erat volutpat. Etiam feugiat eros a ornare malesuada.\n' +
          '\n' +
          'Donec convallis enim in quam sodales tempor. Morbi in posuere sapien. Suspendisse potenti. Praesent quis quam eu sapien scelerisque auctor at non leo. Fusce pretium mi eget mi pretium bibendum. Aenean vel lobortis justo. Sed et luctus elit, laoreet elementum lacus. Donec non libero elementum, rutrum diam a, pretium leo.\n' +
          '\n',
        expertId: 'Expert 1',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: 't2',
        title: 'Trending Article 2',
        content: '',
        expertId: 'Expert 3',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: 't3',
        title: 'Trending Article 3',
        content: '',
        expertId: 'Expert 2',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }, {
        id: 't4',
        title: 'Trending Article 4',
        content: '',
        expertId: 'Expert 1',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      }
    ];
    const blogCategories: BlogCategory[] = [{
      title: 'Blockchain', articles: ['1', '2', '3', '4']
    }, {
      title: 'DeFi', articles: ['5', '6', '7', '8']
    }];
    const inEvidence: BlogCategory = {
      title: 'Trending', articles: ['t1', 't2', 't3', 't4'], articlesPerRow: 3
    };
    const experts: Expert [] = [
      {
        id: 'Expert 1',
        name: 'Expert 1',
        picture: 'https://www.w3schools.com/howto/img_avatar2.png',
        expertise: [
          'Blockchain', 'Web Development', 'UI/UX Design'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.6,
        reviews: 189
      },
      {
        id: 'Expert 2',
        name: 'Expert 2',
        picture: 'https://www.w3schools.com/howto/img_avatar.png',
        expertise: [
          'Smart Contract Development'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.4,
        reviews: 231
      },
      {
        id: 'Expert 3',
        name: 'Expert 3',
        picture: 'https://www.w3schools.com/w3images/avatar5.png',
        expertise: [
          'Graphic Design'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.9,
        reviews: 48
      }
    ];
    const serviceCategories: ServiceCategory[] = [{
      title: 'Smart Contract Development',
      services: ['1', '2', '3', '4']
    }, {title: 'Web Development', services: ['5', '6', '7', '8']}, {title: 'Graphic Design', services: ['9']}];
    const services: Service[] = [
      {
        id: '1',
        title: 'Write an ERC-20 token smart contract in Solidity',
        content: '',
        expertId: 'Expert 2',
        category: 'Smart Contract Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 39
      },
      {
        id: '2',
        title: 'Write a staking smart contract in Solidity',
        content: '',
        expertId: 'Expert 1',
        category: 'Smart Contract Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 79
      },
      {
        id: '3',
        title: 'Write a locking smart contract in Solidity',
        content: '',
        expertId: 'Expert 2',
        category: 'Smart Contract Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 49
      }, {
        id: '4',
        title: 'Write a complete DApp smart contract using Solidity',
        content: '',
        expertId: 'Expert 1',
        category: 'Smart Contract Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 150
      },
      {
        id: '5',
        title: 'Create a complex frontend application using React',
        content: '',
        expertId: 'Expert 1',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 280
      },
      {
        id: '6',
        title: 'Create a simple frontend application using Vue',
        content: '',
        expertId: 'Expert 2',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 99
      },
      {
        id: '7',
        title: 'Create a simple RESTful web service using Java and Spring Boot',
        content: '',
        expertId: 'Expert 2',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 120
      }, {
        id: '8',
        title: 'Create a complex RESTful web service using nodeJs and express',
        content: '',
        expertId: 'Expert 1',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 399
      }, {
        id: '9',
        title: 'Design a minimal logo for your crypto project',
        content: '',
        expertId: 'Expert 3',
        category: 'Graphic Design',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 15
      }];
    return {posts, blogCategories, inEvidence, experts, serviceCategories, services};
  }
}
