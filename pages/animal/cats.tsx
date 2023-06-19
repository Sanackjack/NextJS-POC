import Link from 'next/link'

type Props = {}

export default function cats({}: Props) {
  return (
    <div>Cats
        <img src="/images/cat.png" alt="" height={100} width={100} />
    <div>
        <Link href="/animal/dogs"><a> go to Dogs</a></Link>
    </div>
    </div>

    

  )
}