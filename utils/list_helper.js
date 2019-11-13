const logger = require('./logger');

const dummy = (blogs) => {
  if(blogs){
    return 1;
  }  
};

const totalLikes = (blogs) => {
  const reducer = (acc, cur) => {
    //logger.info('current like ' + cur.likes + ' total is ----> ' + acc);
    return acc + cur.likes;
  };

  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  let mostLikes = 0;
  blogs.map((b) => {
    b.likes > mostLikes ? mostLikes = b.likes : mostLikes;
  });

  if(blogs.length === 0){
    return 'There are no blogs in the array';
  }

  return blogs.find((b) => b.likes === mostLikes);
};

const mostBlogs = (blogs) => {

  let mf = 1;
  let m = 0;
  let item;
  for (let i=0; i<blogs.length; i++)
  {
    for (let j=i; j<blogs.length; j++)
    {
      // eslint-disable-next-line eqeqeq
      if (blogs[i].author == blogs[j].author)
        
        m++;
      if (mf<m)
      {
        mf=m; 
        item = blogs[i].author;
      }
    }
    m=0;
  }
  //logger.info(`${item} ( ${mf} times ) `);
  const res = {
    author: item,
    blogs: mf
  };

  if (blogs.length === 0) {
    return 'Blog list was empty';
  }
  else if (res.author === undefined && res.blogs === 1) {
    logger.info('no author has more than 1');
    res.author ='all authors have 1 blog';
  }

  logger.info(` author --->${res.author} blogs ---> ${res.blogs}`);
  return res;
};

const mostLikes = (blogs) => {
  //put all unique authors in array
  const authors = [];
  blogs.map((b) => authors.indexOf(b.author) === -1 &&authors.push(b.author));

  //make an object with name and number of accumulated likes for each author
  const likeArr = authors.map((a) => {
    const obj = {
      'author': a,
      'likes': 0
    };
    return obj;
  });
  //logger.info(likeArr);

  //add the likes to the correct author
  blogs.map((b) => {
    likeArr.find((auth) => auth.author === b.author).likes += b.likes;
    //logger.info(likeArr.find((auth) => auth.author === b.author));
  });

  //logger.info(favoriteBlog(likeArr));
  return favoriteBlog(likeArr);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};