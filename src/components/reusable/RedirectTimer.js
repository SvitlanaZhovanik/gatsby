import React, { useState, useEffect, useRef } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

const RedirectTimer = ({ getRedirect }) => {
  const [timer, setTimer] = useState(5);
  const intervalId = useRef(null);
  const { t } = useI18next();

  useEffect(() => {
    if (timer) return;
    clearInterval(intervalId.current);
    getRedirect(true);
  }, [getRedirect, timer]);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const data = t('notFoundPage', { returnObjects: true });

  return timer ? (
    <div>
      {data.redirectMsg} <b>{timer}</b> {data.timer}
    </div>
  ) : (
    <div>{data.redirectStatus}...</div>
  );
};

export default RedirectTimer;
