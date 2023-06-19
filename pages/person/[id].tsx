
/* Test Create pages with dynamic routes */

/* Test Static generation with getStaticProps and  getStaticPaths fetch data from url */

import { GetStaticPaths, GetStaticProps } from 'next'
//import { ParsedUrlQuery } from 'querystring'


export default function personId({ person }: { person: Person }) {
    console.log(person);
    return (
        <ul>
            <li key={`${person.id}${person.title}`}>{person.id}.{person.title}</li> 
        </ul>
    )
}

export interface Person {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {



  // return { paths: [{params: {id:'1'}},{params: {id:'2'}}],
  //          fallback: false,
  // }

    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const swapis: Person[] = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = swapis.map((post) => ({
    
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }



}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string; // no longer causes error
  console.log("----GetStaticProps-----")
  console.log(id)
  //const props = fetch(`/api/${slug}`)
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const p1: Person = await res.json()
  return {
    props: {
      person:p1
    }, // will be passed to the page component as props
  }
}

///error - Error: A required parameter (personId) was not provided as a string in getStaticPaths for /person/[personId]

// export const getStaticPaths = async () => {
//   // const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
//   // const data = await res.json();

//   const url = "https://jsonplaceholder.typicode.com/todos";
//   const res = await fetch(url);
//    // const data: Person[] = await res.json()
//    const data: String[] = ["1","2","3"];

//   // const paths = data.map((users) => {
//   //     return {
//   //         params: {
//   //             id: users.id.toString(),
//   //         },
//   //     };
//   // });

//   return {
//       paths,
//       fallback: false,
//   };
// };

// interface IParams extends ParsedUrlQuery {
//   slug: string
// }
// export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {
//   const arr: string[] = ['1', '2']
//   const paths = arr.map((slug) => {
//       return {
//           params: { slug },
//       }
//   })
//   return { paths ,
//            fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { slug } = context.params as IParams // no longer causes error
//   //const props = fetch(`/api/${slug}`)
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
//   const p1: Person = await res.json()
//   return { props: { p1 } }
// }


// export const getStaticProps = async (context:any) => {
//   const id = context.params.id;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//   const p1: Person = await res.json()

//   // Pass post data to the page via props
//   return { props: { p1 } }

// };

// This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(url);
//     const swapis: Person[] = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = swapis.map((post) => ({
//       //console.log(),
//       params: { id: post.id.toString() },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }


// This also gets called at build time
/* export async function getStaticProps({ params }: { params: Person }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const p1: Person = await res.json()
  
    // Pass post data to the page via props
    return { props: { p1 } }
  }
    */
 

//   export const getStaticPaths: GetStaticPaths = async () => {
//     const arr: string[] = ['slug1', 'slug2']
//     const paths = arr.map((slug) => {
//         return {
//             params: { slug },
//         }
//     })
//     return { paths }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//     // This is where the error occurs
//     const { slug } = context.params // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
//     const props = fetch(`/api/${slug}`)
//     return { props }
// }



// export async function getStaticProps() {
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(url);
//     const swapis: Person = await res.json();
//     //const p: Person[] = result;
//     // const result = JSON.parse(JSON.stringify(res))
//     // console.log(result);

//     return {
//         props: {
//             person: swapis
//         }, // will be passed to the page component as props
//     }
// }