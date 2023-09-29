import { Link, useNavigate } from 'react-router-dom';
import { HeaderPokedex, InputSearch, PageTitle, Tools } from './style';
import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

export const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/pokemon/${search.toLowerCase()}`);
    setSearch('');
  }

  const handleSearchValue = (e: any) => {
    setSearch(e.target.value);
  }

  return (
    <HeaderPokedex>
      <PageTitle>
        <Link to="/">Pokédex</Link>
      </PageTitle>
      <Tools>
        <form onSubmit={handleSearch}>
          <InputSearch placeholder='Digite um id ou nome...'
            value={search}
            onChange={(e: any) => {
              handleSearchValue(e);
            }}
          />
          <FaSearch className="inputIcon" />
        </form>
      </Tools>
    </HeaderPokedex>
  )
}
