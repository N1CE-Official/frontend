import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  BlogCategory,
  BlogPost,
  Expert,
  ExpertPlatformService,
  Order,
  SearchResult,
  ServiceCategory,
  ServiceReview,
  User,
  UserFavoritePost,
  UserFavoriteService
} from '../classes/models';
import { faBullhorn, faChartLine, faCode, faFan, faGlobe, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

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
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210822140000'
      }, {
        id: '2',
        title: 'Article 2',
        content: '',
        expertId: 'Expert 3',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210829140000'
      }, {
        id: '3',
        title: 'Article 3',
        content: '',
        expertId: 'Expert 2',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210831140000'
      }, {
        id: '4',
        title: 'Article 4',
        content: '',
        expertId: 'Expert 1',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090000'
      }, {
        id: '5',
        title: 'Article 5',
        content: '',
        expertId: 'Expert 3',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090000'
      }, {
        id: '6',
        title: 'Article 6',
        content: '',
        expertId: 'Expert 1',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090000'
      }, {
        id: '7',
        title: 'Article 7',
        content: '',
        expertId: 'Expert 2',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090500'
      }, {
        id: '8',
        title: 'Article 8',
        content: '',
        expertId: 'Expert 1',
        category: 'DeFi',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090200'
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
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901092200'
      }, {
        id: 't2',
        title: 'This is how you should invest your money in crypto',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis condimentum quam. Sed sed accumsan diam. Curabitur sed nisi malesuada, dignissim leo in, semper metus. Donec elementum leo at feugiat faucibus. Suspendisse volutpat ultricies erat, et convallis urna hendrerit id. Donec id elementum dolor, non condimentum dui. Nulla magna erat, pulvinar in felis a, dapibus rhoncus ipsum. Nulla non aliquam augue, sit amet mattis justo. Maecenas eu sapien in felis mollis faucibus malesuada ornare risus. Phasellus sed augue fringilla, feugiat lorem vitae, tempor arcu. Morbi ipsum velit, volutpat at lobortis ac, viverra ac risus.',
        expertId: 'Expert 3',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901091200'
      }, {
        id: 't3',
        title: 'Trending Article 3',
        content: '',
        expertId: 'Expert 2',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090800'
      }, {
        id: 't4',
        title: 'Trending Article 4',
        content: '',
        expertId: 'Expert 1',
        category: 'Trending',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        publishingTime: '20210901090700'
      }
    ];
    const blogCategories: BlogCategory[] = [
      {title: 'Smart Contracts', articles: ['1', '2', '3', '4']},
      {title: 'DeFi', articles: ['5', '6', '7', '8']}];
    const inEvidence: BlogCategory = {
      title: 'Trending', articles: ['t2', 't3', 't4'], articlesPerRow: 3
    };
    const inEvidencePost: BlogPost = {
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
      snippet: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      publishingTime: '20210901092200'
    };
    const experts: Expert [] = [
      {
        id: 'Expert 1',
        name: 'Expert 1',
        picture: 'https://www.w3schools.com/howto/img_avatar2.png',
        expertise: [
          'Smart Contracts', 'Web Development', 'Graphic Design'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.6,
        reviews: 189,
        memberSince: '20210901',
        expertSince: '20210910'
      },
      {
        id: 'Expert 2',
        name: 'Expert 2',
        picture: 'https://www.w3schools.com/howto/img_avatar.png',
        expertise: [
          'Smart Contracts'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.4,
        reviews: 231,
        candidatureVotes: 55,
        candidatureEndTime: '20210925113600',
        candidatureStakedAmount: 123800,
        memberSince: '20210901'
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
        reviews: 48,
        candidatureVotes: 124,
        candidatureEndTime: '20210928112200',
        candidatureStakedAmount: 15480,
        memberSince: '20210901'
      },
      {
        id: 'Expert 4',
        name: 'Expert 4',
        picture: 'https://www.w3schools.com/w3images/avatar6.png',
        expertise: [
          'Marketing', 'Market Analysis'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.8,
        reviews: 21,
        memberSince: '20210901',
        expertSince: '20210910'
      },
      {
        id: 'Expert 5',
        name: 'Expert 5',
        picture: 'https://www.w3schools.com/w3images/avatar2.png',
        expertise: [
          'Mining'
        ],
        shortBio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        rating: 4.9,
        reviews: 48,
        memberSince: '20210901',
        expertSince: '20210910'
      }
    ];
    const serviceCategories: ServiceCategory[] = [
      {title: 'Smart Contracts', services: ['1', '2', '3', '4'], icon: faCode},
      {title: 'Web Development', services: ['5', '6', '7', '8'], icon: faGlobe},
      {title: 'Graphic Design', services: ['9'], icon: faPaintBrush},
      {title: 'Marketing', services: ['10'], icon: faBullhorn},
      {title: 'Mining', services: ['11'], icon: faFan},
      {title: 'Market Analysis', services: ['12'], icon: faChartLine}
    ];
    const services: ExpertPlatformService[] = [
      {
        id: '1',
        title: 'Write an ERC-20 token smart contract in Solidity',
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
        expertId: 'Expert 2',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 39,
        publishingTime: '20210901092200'
      },
      {
        id: '2',
        title: 'Write a staking smart contract in Solidity',
        content: '',
        expertId: 'Expert 1',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 79,
        publishingTime: '20210901092200'
      },
      {
        id: '3',
        title: 'Write a locking smart contract in Solidity',
        content: '',
        expertId: 'Expert 2',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 49,
        publishingTime: '20210901092200'
      }, {
        id: '4',
        title: 'Write a complete DApp smart contract using Solidity',
        content: '',
        expertId: 'Expert 1',
        category: 'Smart Contracts',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 150,
        publishingTime: '20210901092200'
      },
      {
        id: '5',
        title: 'Create a complex frontend application using React',
        content: '',
        expertId: 'Expert 1',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 280,
        publishingTime: '20210901092200'
      },
      {
        id: '6',
        title: 'Create a simple frontend application using Vue',
        content: '',
        expertId: 'Expert 2',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 99,
        publishingTime: '20210901092200'
      },
      {
        id: '7',
        title: 'Create a simple RESTful web service using Java and Spring Boot',
        content: '',
        expertId: 'Expert 2',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 120,
        publishingTime: '20210901092200'
      }, {
        id: '8',
        title: 'Create a complex RESTful web service using nodeJs and express',
        content: '',
        expertId: 'Expert 1',
        category: 'Web Development',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 399,
        publishingTime: '20210901092200'
      }, {
        id: '9',
        title: 'Design a minimal logo for your crypto project',
        content: '',
        expertId: 'Expert 3',
        category: 'Graphic Design',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 15,
        publishingTime: '20210901092200'
      }, {
        id: '10',
        title: 'Build a marketing plan for your Crypto Business',
        content: '',
        expertId: 'Expert 4',
        category: 'Marketing',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 599,
        publishingTime: '20210901092200'
      }, {
        id: '11',
        title: 'Setup a Bitcoin Miner',
        content: '',
        expertId: 'Expert 5',
        category: 'Mining',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 150,
        publishingTime: '20210901092200'
      }, {
        id: '12',
        title: 'Create a diversified portfolio for your crypto investments',
        content: 'I will create a highly diversified portfolio for your investments.\n' +
          'Depending on your budget and on your willing to risk, we could discuss together the best investment strategy for you.',
        expertId: 'Expert 4',
        category: 'Market Analysis',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        startingPrice: 150,
        publishingTime: '20210901092200'
      }];
    const topServices: string[] = ["1", "4", "10", "5"];
    const latestBlogPosts: string[] = ["1", "4", "t3", "5"];
    const latestExpertCandidates: string[] = ["Expert 2", "Expert 3"];
    const topExperts: string[] = ["Expert 1", "Expert 4", "Expert 5"];
    const reviews: ServiceReview[] = [
      {
        id: 'r1',
        serviceId: '1',
        userId: 'user123',
        comment: 'The expert went beyond my expectations with its delivery, I can say that I\'m very satisfied.',
        rating: 4,
        publishingTime: '20210901092200'
      },
      {
        id: 'r2',
        serviceId: '1',
        userId: 'user456',
        comment: 'The contract was very well written and the delivery was extremely fast. I would recommend this expert to anyone.',
        rating: 5,
        publishingTime: '20210901092200'
      }
    ];
    const users: User[] = [
      {
        id: 'user123',
        name: 'John Doe',
        picture: 'https://static.thenounproject.com/png/363640-200.png',
        memberSince: '20210902'
      },
      {
        id: 'user456',
        name: 'Jane Doe',
        picture: 'https://static.thenounproject.com/png/363640-200.png',
        memberSince: '20210903'
      }
    ];
    const search: SearchResult[] = [
      {
        title: 'Create a diversified portfolio for your crypto investments',
        type: 'Service',
        link: '/service/12',
        snippet: 'I will create a highly diversified portfolio for your investments...',
        expertId: 'Expert 4',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      },
      {
        title: 'This is how you should invest your money in crypto',
        type: 'Blog Post',
        link: '/post/t2',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis condimen...',
        expertId: 'Expert 3',
        featuredImg: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }
    ];
    const orders: Order[] = [
      {
        id: '1', userId: 'Test User', serviceId: '1', startDate: '20210912090000', price: 99
      }
    ];
    const userFavoriteServices: UserFavoriteService[] = [
      {
        userId: 'Test User', serviceId: '1'
      }
    ];
    const userFavoritePosts: UserFavoritePost[] = [
      {
        userId: 'Test User', postId: '3'
      },
      {
        userId: 'Test User', postId: 't1'
      },
    ];
    return {
      posts,
      blogCategories,
      inEvidence,
      experts,
      serviceCategories,
      services,
      inEvidencePost,
      topServices,
      latestBlogPosts,
      latestExpertCandidates,
      reviews,
      users,
      search,
      topExperts,
      orders,
      userFavoriteServices,
      userFavoritePosts,
    };
  }
}
