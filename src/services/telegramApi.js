const TELEGRAM_BOT_ID = process.env.GATSBY_TELEGRAM_BOT_ID;
const TELEGRAM_GROUP_ID = process.env.GATSBY_TELEGRAM_GROUP_ID;

const BASE_URL = 'https://api.telegram.org';

const sendMessage = async text => {
  const res = await fetch(
    `${BASE_URL}/bot${TELEGRAM_BOT_ID}/sendMessage?chat_id=${TELEGRAM_GROUP_ID}&parse_mode=HTML&text=${text}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error());

  /* 
  This code needs to know the identifier of the group. To do this, you must add the bot to the group and give administrator permissions
  */
  /*
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/getUpdates`)
    .then(res => res.json())
    .then(data => console.log(data));
  */
};

const getTelegramMessage = messageConfig => {
  /* future message constructor  */
  const { title, hashTag, data, analysisData, sitelang } = messageConfig;
  const order = `<b>${title.toUpperCase()}</b>`;
  const tag = `%0A%23${hashTag}`;
  const dataMessage = `%0A%0A<b>Ім'я</b>: ${data.name} %0A<b>Телефон:</b>: %2B${data.phone} %0A<b>Ел. пошта</b>: ${data.email}`;
  const info = `%0A%0A<b>Форма заповнена з</b>: ${analysisData}`;
  const lang = `%0A<b>Мова сайту</b>: ${sitelang}`;
  return [order, tag, dataMessage, info, lang].join('');
};

export { sendMessage, getTelegramMessage };
