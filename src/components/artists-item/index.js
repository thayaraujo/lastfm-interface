import React from 'react';
import * as S from './styled';

const ArtistsItem = ({ name, linkToItem, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>Tittle:</S.WrapperFullName>
      <S.WrapperLink href={linkToItem}
        target="_blank"
        rel="noreferrer">
        {fullName} 
      </S.WrapperLink>
    </S.Wrapper>
  )
}

export default ArtistsItem;