import React from 'react';
import { PageParamsWrapperProps } from './PageParamsWrapper.types';
import { useStyles } from './PageParamsWrapper.styles';
import { Section } from '../Section';


export const PageParamsWrapper: React.FC<PageParamsWrapperProps> = ({ title,children }) => {
  const { styles } = useStyles();

  return (
    <div className={ styles.wrapper }>
      <Section
        title={ title }
        level={ 3 }>
        { children }
      </Section>
    </div>
  );
};
