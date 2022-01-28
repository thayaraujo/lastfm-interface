import React from 'react';
import * as S from './styled';
import lastfmState from '../../hooks/lastfm-hooks'

const ArtistsItem = ({ name, linkToItem, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}
      </S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToItem}
        target="_blank"
        rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  )
}

export default ArtistsItem;