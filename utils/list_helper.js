const dummy = (blogs) => {
  if(blogs){
    return 1;
  }  
};

const totalLikes = (blogs) => {
  const reducer = (acc, cur) => {
    //console.log('current like ' + cur.likes + ' total is ----> ' + acc);
    return acc + cur.likes;
  };

  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  let mostLikes = 0;
  blogs.map((b) => {
    b.likes > mostLikes ? mostLikes = b.likes : mostLikes;
  });

  return blogs.find((b) => b.likes === mostLikes);

};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};