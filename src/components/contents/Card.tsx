import React from 'react';

interface ICard {
  children: React.ReactNode;
  callback: () => void;
}

export default function Card({ children, callback }: ICard) {
  return children;
}
