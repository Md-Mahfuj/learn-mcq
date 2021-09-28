import {useRef} from "react";

export const  useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () => elRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});

  return [executeScroll, elRef];
};
