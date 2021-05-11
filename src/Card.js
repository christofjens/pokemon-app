import './Card.css'

export default function Card({ name, frontImage, backImage, types }) {
  return (
    <section className="Card">
      <header className="Card__header">
        <h2>{name.toUpperCase()}</h2>
        <div className="Card__image-container">
          <img src={frontImage} alt="" />
          <img src={backImage} alt="" />
        </div>
      </header>
      <main>
        Type(s):{' '}
        <ul>
          <li>{types[0]}</li>
          <li>{types[1]}</li>
        </ul>
      </main>
    </section>
  )
}

// function splitTypes(typesToSplit, separator) {
//   const arrayOfTypes = typesToSplit.split(separator)
// }

// const separator = ', '

// splitTypes(arrayOfTypes, separator)
