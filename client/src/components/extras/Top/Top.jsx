import { useState, useEffect } from "react";
import Style from './Top.module.css'
import { TiArrowSortedUp } from "react-icons/ti";

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 300) {
          setIsVisible(true);
      } else {
          setIsVisible(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };

  const scrollButtonClass = window.innerWidth < 480 ? Style.scrollButtonSmall : Style.scrollButtonLarge;
  const scrollToTopClass = window.innerWidth < 480 ? Style.scrollToTopSmall : Style.scrollToTopLarge;

  return (
      <div className={scrollButtonClass}>
          {isVisible && (
              <button className={scrollToTopClass} onClick={scrollToTop}>
                  {<TiArrowSortedUp size={30} />}
              </button>
          )}
      </div>
  );
};

export default Top;
