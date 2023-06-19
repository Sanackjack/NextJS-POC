
import Link from 'next/link'

export default function person({ person }: { person: Person[] }) {
    console.log("test get person");
    return (
        <ul>
            
          {person.map((p,index) => (
            <Link href="/person/[id]" as={`/person/${p.id}`} ><li key={`${index}`}>{p.id}.{p.title}</li></Link>
          ))}
        </ul>
      )
}

export interface Person {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

  /* Test Static generation with getStaticProps fetch data from url */
export async function getStaticProps() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const swapis: Person = await res.json();
    //const p: Person[] = result;
   // const result = JSON.parse(JSON.stringify(res))
   // console.log(result);

    return {
      props: {
        person:swapis
      }, // will be passed to the page component as props
    }
  }
