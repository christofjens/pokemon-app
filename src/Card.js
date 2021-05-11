import './Card.css'

export default function Card({ name, images, types }) {
  return (
    <section className="Card">
      <header>
        <h2>{name.toUpperCase()}</h2>
        <img src={images.front} alt="" />
        <img src={images.back} alt="" />
      </header>
      <main>
        Type(s):{' '}
        <ul>
          {types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </main>
    </section>
  )
}
