

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      stats: {
        likes: 6,
        dislikes: 2,
        fav: 3
      }
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      stats: {
        likes: 124,
        dislikes: 8,
        fav: 36
      }
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      stats: {
        likes: 800,
        dislikes: 36,
        fav: 147
      }
    }
  ];


  const body = document.querySelector('body');
  function createPostCard(post){

    const div = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const ul = document.createElement('ul');

    const button = document.createElement('button');
    const span = document.createElement('span');


      div.classList.add('post');
      img.classList.add('post__image');
      h2.classList.add('post__title');
      p.classList.add('post__text');
      ul.classList.add('actions', 'post__actions');

       h2.textContent = post.title;
       p.textContent = post.text;


      img.setAttribute('src', post.img, 'alt', 'post image');
      div.append(img);
      div.append(h2);
      div.append(p);
      div.append(ul);


      let
      createLi,
      createButton,
      createSpan,
      createSpanCount,
      spanDislike,
      spanFav;

      let mass = ['actions__icon--like', 'actions__icon--dislike', 'actions__icon--fav'];
      let statsMass = [post.stats.likes, post.stats.dislikes, post.stats.fav];
      for (let i = 0; i < 3; i++){
          createLi = document.createElement('li');
          createButton = document.createElement('button');
          createSpan = document.createElement('span');
          createSpanCount = document.createElement('span');

          createLi.classList.add('actions__item');
          createSpanCount.textContent =  statsMass[i];
          createButton.classList.add('actions__btn');
          createSpan.classList.add('actions__icon', mass[i]);
          createSpanCount.classList.add('actions__count');

          ul.append(createLi);
          createLi.append(createButton);
          createButton.append(createSpan);
          createButton.append(createSpanCount);

      }

      return body.appendChild(div);
  }



                  function createCards(posts){
                    const mass2 = posts.map(function(elem){
                    return createPostCard(elem);
                  })




              }



createCards(posts);
