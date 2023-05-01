import Link from 'next/link'
import { TestText } from 'components';


const IndexPage = () => (
  <div>
     <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
      <TestText text='Testong admin panel' />
    </p>
    <p>Wjbgvjokingfrbg</p>
</div>
)

export default IndexPage
