import { Link, withTranslation } from '../i18n';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/post/[id]'>
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link href='/post/[id]' as='/post/second'>
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default withTranslation('common')(Header)
