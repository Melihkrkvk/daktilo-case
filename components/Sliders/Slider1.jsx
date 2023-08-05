'use client';
import { createStyles } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Button } from '@mantine/core';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';

const useStyles = createStyles((theme, ) => ({
  carousel: {
    overflow: 'hidden',
    position: 'relative',
  },
  inner: {
    whiteSpace: 'nowrap',
    transition: 'transform 0.3s',
    //marginTop: 30,
  },
  carousel_item: {
    backgroundColor: 'lime',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 405, // 16:9 olarak ayarlanacak
    //minHeight: 400,
    //maxHeight: 400,
    color: 'white',
  },

  indicators: {
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
    gap: 10,

  },
  active: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.components,
    display: 'flex',
    justifyContent: 'center',
    transition: 'transfrom 0.3s',
    height: 40,
    width: 40,
    borderRadius: 30,
    padding: 10,
    
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    transition: 'transfrom 0.3s',
    height: 40,
    width: 40,
    borderRadius: 30,
    padding: 10,
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[5] : theme.colors.gray[6]
    },
    icon_right: {
      position: 'absolute',
      top: 210,
      right: 0,
      
      transitionDuration: '0.3s',
      '&:hover': {
        cursor: 'pointer',
        transitionDuration: '0.3s',
        transform: `translateX(4px)`,
        

      }

    },
    icon_left: {
      position: 'absolute',
      top: 210,
      left: 0,
      transitionDuration: '0.3s',
      '&:hover': {
        cursor: 'pointer',
        transitionDuration: '0.3s',
        transform: `translateX(-4px)`
      }

    }
}));


export const CarouselItem = ({children, width}) => {
  const {classes} = useStyles();
  return (
    <div className={classes.carousel_item} style={{width: width}}>
      {children}
    </div>
  );

};

const Slider1 = ({children, auto = false, sildeTime = 2000}) => {
  const {classes} = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState();

  useEffect(() => {
    auto ? setPause(false) : setPause(true); // kontrol et
    const interval = setInterval(() => {
      if (!pause) {
        updateIndex(activeIndex + 1);
      }
    }, sildeTime);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  })

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) -1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div 
    onMouseEnter={() => {setPause(true)}}
    onMouseLeave={() => {setPause(false)}}
    className={classes.carousel}
    >
      <div className={classes.inner} style={{transform: `translateX(-${activeIndex * 100}%)`}}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {width: '100%'});
      })}
      </div>
      <div className={classes.indicators}>
        <ChevronLeft className={classes.icon_left} size={40} opacity={0.5} onClick={() => {
          updateIndex(activeIndex - 1);
        }} />
        {React.Children.map(children, (child, index) => {
          return (
            <Button className={index === activeIndex ? classes.active : classes.button} onClick={() => {
              updateIndex(index);
            }}>{index + 1}</Button>
          );
        })}
        <ChevronRight className={classes.icon_right} onClick={() => {
          updateIndex(activeIndex + 1);
        }} opacity={0.5} size={40} />
      </div>
    </div>
  )
}

export default Slider1;