import background from '../assets/logo-removebg-preview.png';

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.8), 
          rgba(0, 0, 0, 0.8)
        ), url(${background.src})`,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '50vh',
        zIndex: '-1000',
        position: 'absolute',
      }}
    >
      <h1>Frontend Software Engineer</h1>
    </main>
  );
}
