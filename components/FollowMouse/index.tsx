import React, { useRef, useEffect } from 'react';
import * as S from './style';

interface IFollowMouseImage {
  src: string;
}

const FollowMouseImage = ({ src }: IFollowMouseImage) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      imageRef.current ? imageRef.current.style.left = `${clientX - 100}px` : null;
      imageRef.current ? imageRef.current.style.top = `${clientY - 70}px` : null;
    }

    const whackHammer = () => {
      imageRef.current ? imageRef.current.style.transform = `rotate(-25deg)` : null;
    }

    const unwhackHammer = () => {
      imageRef.current ? imageRef.current.style.transform = `rotate(0)` : null;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', whackHammer);
    window.addEventListener('mouseup', unwhackHammer);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', whackHammer);
      window.removeEventListener('mouseup', unwhackHammer);
    };
  }, []);

  return <S.Hammer alt="Hammer" ref={imageRef} src={src} />;
}

export default FollowMouseImage