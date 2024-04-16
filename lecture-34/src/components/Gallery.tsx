import Profile from './Profile';


const Gallery = () => {
  return (
    <section className="gallery-container">
      <h1>Amazing scientists</h1>
      <div className="profiles-container">
      <Profile />
      <Profile />
      <Profile />
      </div>
    </section>
  );
}

export default Gallery;
