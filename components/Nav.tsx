import Link from 'next/link'

type Props = {}

export default function Nav({ }: Props) {
    return (
        <>

            <nav>
                <Link href="/"><a style={{color:"#0070f3"}} >Home</a></Link>|
                <Link href="/animal/dogs"><a style={{color:"#0070f3"}}>Dogs </a></Link>|
                <Link href="/animal/cats"><a style={{color:"#0070f3"}}>Cats</a></Link>|
                <Link href="/animal/zoo"><a style={{color:"#0070f3"}}>Zoo</a></Link>|

                <Link href="/person"><a style={{color:"#0070f3"}}>Person</a></Link>|

            </nav>


        </>
    )
}