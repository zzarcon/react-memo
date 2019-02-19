import * as React from 'react';
import { ComponentType } from 'react';

export type CompareFunction = (prev: {[key: string]: any}, next: {[key: string]: any}) => boolean;

const shallowCompare = (prev: {[key: string]: any}, next: {[key: string]: any}): boolean => {
  for (let key in next) {
    if (next[key] !== prev[key]) return false;
  }

  return true;
};

export function memo<T>(Component: ComponentType<T>, areEqual: CompareFunction = shallowCompare): ComponentType<T> {
  let prevProps = {};
  let prevResult: JSX.Element | undefined;

  return (nextProps) => {
    if (prevResult !== undefined && areEqual(prevProps, nextProps)) {
      return prevResult;
    }

    prevProps = nextProps;
    prevResult = <Component {...nextProps} />;

    return prevResult;
  }
}