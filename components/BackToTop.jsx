import React, { useEffect, useState }from 'react';
import { createStyles } from '@mantine/core';
import { SCROLL_OFFSET } from '@utils/constants';
import { IconChevronUp } from '@tabler/icons-react';
const useStyles = createStyles((theme) => ({
  circlePassive: {
    width: '50px',
    height: '50px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[0],
    borderRadius: '50%',
    position: 'fixed',
    bottom: 20,
    right: 20,
    transition: 'all',
    transitionDuration: '1s',
    transitionProperty: 'all',
    transform: `translateY(200px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  circleActive: {
    width: '50px',
    height: '50px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: '50%',
    position: 'fixed',
    bottom: 20,
    right: 20,
    transition: 'all',
    transitionDuration: '1s',
    transitionProperty: 'all',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },


}));
function BackToTop() {
  const { classes } = useStyles();
  const [isBackToTopShown, setIsBackToTopShown] = useState(false);
  
  const handleTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const handleScrollEvent = () => {
    if (window.scrollY > SCROLL_OFFSET) {
     
      setIsBackToTopShown(true);
    } else {
      
      setIsBackToTopShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    // isBackToTopShown && <div className={classes.circle} onClick={handleTop} />
    <div className={isBackToTopShown ? classes.circleActive : classes.circlePassive} onClick={handleTop}>
      <IconChevronUp/>
      </div>
  )
}

export default BackToTop;
