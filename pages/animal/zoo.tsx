


export default function zoo({ animals }: { animals: String[] }) {
    return (
        <ul>
          {animals.map((animal,index) => (
            <li key={`${index}-${animal}`}>{animal}</li>
          ))}
        </ul>
      )
}

  /* Test get  getStaticProps */
export async function getStaticProps() {
    return {
      props: {
        animals:['cat','dog','fish']
      }, // will be passed to the page component as props
    }
  }