const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://neweracaptalk.com/blog/wp-content/uploads/2015/08/compton-nwa-new-era-9fifty-hats.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://www.fashiongonerogue.com/wp-content/uploads/2016/10/Shearling-Jackets.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i1.wp.com/sneakernews.com/wp-content/uploads/2016/01/nike-basketball-all-star-2016-torontoi.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://sc02.alicdn.com/kf/HTB1lwkllv6H8KJjSspmq6z2WXXaE/200488775/HTB1lwkllv6H8KJjSspmq6z2WXXaE.jpg_.webp',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://www.etro.com/on/demandware.static/-/Sites-etro_global/default/dw1127b310/menu-categories/Etro_Menu_Man_Collection_new.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
