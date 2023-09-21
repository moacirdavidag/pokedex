import { Link } from 'react-router-dom';
import { HeaderPokedex, PageTitle } from './style';

export const Header = () => {
  return (
    <HeaderPokedex>
      <PageTitle>
        <Link to="/">Pokédex</Link>
      </PageTitle>
    </HeaderPokedex>
  )
}
