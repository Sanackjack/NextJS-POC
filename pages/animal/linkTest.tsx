
import Link from 'next/link'

type Props = {}

export default function linkTest({}: Props) {
  return (
    <div>linkTest
    {/* test use Link */}
    <nav>
        <Link href="/animal/dogs"><a >Dogs</a></Link>|
        <Link href="/animal/cats"><a >Cats</a></Link>|
      </nav>

    </div>
  )
}