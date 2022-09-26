import { useEffect, useState } from 'react';

export const getVisibleText = (text = '', limit = 200, skip = false) => {
  if (text.length <= limit || skip) {
    return text;
  }
  const words = text.split(' ');

  let characters = -1;
  let id = 0;

  while (characters <= limit) {
    characters += words[id].length + 1;
    id += 1;
  }

  return words.slice(0, id - 1).join(' ') + '...';
};

export const useReadMore = (textContent, textLimit) => {
  const [showAllText, setShowAllText] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    if (textContent.length > textLimit) {
      setShowReadMore(true);
      return;
    }
    if (!showReadMore) return;
    setShowReadMore(false);
  }, [textLimit, textContent.length, showReadMore]);

  const toggleText = () => {
    setShowAllText(p => !p);
  };

  const text = getVisibleText(textContent, textLimit, showAllText);

  return { text, toggleText, showReadMore, showAllText };
};
