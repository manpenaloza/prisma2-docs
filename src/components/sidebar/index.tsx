import React from 'react';
import Tree from './tree';
import styled from 'styled-components';
import { useAllArticlesQuery } from '../../hooks/useAllArticlesQuery';
import { AllArticles } from '../../interfaces/AllArticles.interface';

const Sidebar = styled.aside`
  margin: 0;
  max-width: 215px;
  width: 20%;
  @media (min-width: 1024px) {
    align-self: flex-start;
    position: sticky;
    top: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarLayout = () => {
  const { allMdx }: AllArticles = useAllArticlesQuery();
  return (
    <Sidebar>
      <List>
        <Tree edges={allMdx.edges} />
      </List>
    </Sidebar>
  );
};

export default SidebarLayout;
