import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    },
  ]
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container" id={category.id}>
        <div className='background-image' style={{ backgroundImage: `url(${category.imageUrl})`}} />
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
        
      </div>
      ))}
      
    </div>
  );
}

export default App;
