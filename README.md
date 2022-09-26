## 🚀 Проект Be Better

### 1. Описание проекта

Репозиторий: https://github.com/pavel-sheremet-dev/gw-bb-project

**Основной стек:**

- Gatsby.js
- Netlify CMS
- Tailwind CSS
- i18next

**Полезные ссылки для ознакомления:**

- Gatsby.js [Общий туториал](https://www.gatsbyjs.com/docs/tutorial/)
  [Передача контекста странице для динамических запросов graphql](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#modifying-pages-created-by-core-or-plugins)
  [Подключение Netlify CMS, деплой и т.д.](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-netlify-cms/)

- Netlify CMS
  [Netlify CMS, подключение, настройки](https://www.netlifycms.org/docs/gatsby/#enable-identity-and-git-gateway)
  [Документация](https://www.gatsbyjs.com/docs/tutorial/)

- Tailwind CSS

  [Подключение для Gatsby](https://tailwindcss.com/docs/guides/gatsby)
  [Документация](https://tailwindcss.com/docs/y)

- i18next

  [Плагин](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/?=i18next)
  Для 17-го реакта ставим более старую версию.

### 2. Core Concepts

**Названия веток:**

**Пример**: `PS_feat_form`,

- `PS` - ваши имя и фамилия (IV - Ivan Vasylyovich и т.д.)
- `_feat_` - обозначение того, что будет делаться в ветке
- `form` - имя функционала, секции, сервиса и т.д.

**Варианты**:

- `_feat_` - добавление нового функционала (feature);
- `_fix_` - исправление каких-то ошибок (для того, чтобы сделать мелкие фиксы,
  то не нужно создавать новую ветку, но если это какие-то исправления более
  глобальные и выходят в рамки целой задачи, тогда создаём ветку);
- `_ref_` - рефакторинг кода, который выходит на уровень отдельной задачи
- `_docs_` - добавление документации, комментариев и т.д.
- `_test_` - тестирование какого-то функционала, если необходимо.

**Описание коммитов:**

Отвечает на вопрос: что делает этот коммит?

Поскольку во время написания кода, в рамках работы с одной веткой, у вас может
быть много коммитов, их также хорошо разделять по их назначению

Идентификаторы те же, что и для названия веток. Можно использовать знак `!` для
акцентирования внимания, что это важный коммит и стоит на него обратить
внимание.

**Пример**

```powershell
git commit -m "feat: add callback form markup"
```

```powershell
git commit -m "fix!: fix trouble with form validation. Value - name"
```

**Pull requests:**

Пулл реквесты делаем только в ветку `dev`. Сейчас она настроена как ветка по
умолчанию, поэтому с этим не должно быть проблем.

Описание пулл реквеста делаете немного более детальными чем коммиты. Если
считаете нужным обратить внимание на какой-то момент, укажите на это. Язык
используете удобный для вас.

### 3. Работа с Git в терминале

[Ссылка на инструкцию](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing)

### 4. Работа с проектом

1. **Клонируем себе репозиторий**

```powershell
git clone https://github.com/pavel-sheremet-dev/gw-bb-project.git
```

2. **Выполняем установку пакетов**

```powershell
npm i
```

3. **Настраиваем переменные окружения (environment)**

Необходимо обратиться к ТЛ за получением ключей переменных окружения (env).

Создаём в корневой папке (на уровне с `.env.template`) 2 файла:

```
.env.development
.env.production
```

- В файле `.env.template` указаны названия ключей.
- Копируем в созданные файлы и вставляем информацию, полученную у ТЛ.
- Оба файла должны быть идентичны.

4. **Запускаем локальный сервер, проверяем работу.**

```powershell
npm start
```

или если установлен `gatsby cli`

```powershell
gatsby develop
```

5. **Работаем с проектом по алгоритму, описанному в
   [инструкции по работе с Git в терминале](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing).**
   Даже если вы по какой-то причине ещё не используете терминал, то алгоритм
   чётко описан.

### Конфигурация Gatsby

Для конфигурации в Gatsby используется файлы конфигурации `gatsby-config.js`,
`gatsby-browser.js`, и др. (находяться в корневом каталоге проекта). Туда
добавляются плагины, импортируются стили, выполняются различные манипуляции
связанные с настройкой проекта.
[Ссылка на документацию](https://www.gatsbyjs.com/docs/reference/config-files/)

В этом **README** описаны некоторые ньюансы, которые возникли во время работы
над этим проектом.

**1. gatsby-plugin-purgecss**

---

!!! ВАЖНО: Чтобы стили библиотек применялись нужно добавить в файле
`gatsby-config.js` в плагине gatsby-plugin-purgecss настройку этого файла в
ignore. Пример:

```js
 {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: true,
        tailwind: true,
        ignore: ['react-phone-input-2/lib/bootstrap.css'],
      },
    },
```

---

### Подключение Gatsby и СMS Netlify

**Освновные действия.**

1. В корневой папке (на одном уровне с src), мы создаем следующую структуру:

```
|-- static
    |-- admin
        |-- config.yml
    |-- assets
```

2. Базовые настройки `config.yml`

```yml
backend:
  name: git-gateway
  repo: pavel-sheremet-dev/gw-bb-project
  branch: main
media_folder: static/assets
public_folder: /assets
```

Где `pavel-sheremet-dev/gw-bb-project` - это аккаунт и название репозитория.

3. В аккаунте Netlify в настройках сайта, нужно сделать следующее:

**Settings > Identity**, и выбрать **Enable Identity service**. **Services > Git
Gateway**, and click **Enable Git Gateway**

Есть ещё настройки доступа и другие параметры. Более детально
[тут](https://www.netlifycms.org/docs/gatsby/#header)

4. Вход в административную панель CMS выполняется со страницы сайта (открытого
   по адресу netlify или запущенного локально). Ендпоинт - `/admin`

5. Нужно будет выполнить регистрацию по адресу ел. почты, на которую придёт
   ссылка для верификации. После этого есть доступ на админ-панель.

### Локализация

Для локализации используется плагин `gatsby-plugin-react-i18next` Для сборки
выбран React 17-й версии. поэтому и планин установлен более старой версии.

[Инструкция по настройке локализации](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-i18next/)

Базовые действия:

1. Добавить конфигурацию в `gatsby-config.js`

```js
module.exports = {
  plugins: [
    // others plugins
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`uk`, `ru`, `en`],
        defaultLanguage: `uk`,
        generateDefaultLanguagePage: '/uk',
        redirect: false,
        siteUrl: '',

        i18nextOptions: {
          lng: 'uk',
          load: 'currentOnly',
          interpolation: {
            escapeValue: false,
          },
          nsSeparator: false,
          keySeparator: false,
        },
      },
    },
  ],
};
```

2. Создать и наполнить структуру

```
|-- locales
    |-- en
        |-- translation.json
    |-- uk
        |-- translation.json
    |-- ru
        |-- translation.json
```

3. На каждую страницу необходимо добавить запрос `graphql`

```js
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
```

В коде используем хук `useTranslation` для получения доступа к данным, в
зависимости от того, какой язык сайта открыт в браузере клиента.

4. Для смены языка пишется компонент, например `LanguageSwitcher`, в ссылке выше
   об этом написано.

5. Плагин на каждую страницу добавляет контекст `language`, который мы
   используем для конкретизации запросов в `graphql`. Таким образом, используя
   фильтр, мы "сужаем" поиск и осуществляем локализацию данных, которые нам
   приходят с СMS.

### Телеграм API

Базовые действия:

1. С помощью `botfather` (папа всех ботов :) ) создаём новый бот и получаем
   токен этого бота.

2. Создаём группу, в которую и будут приходить сообщения по сабмиту формы.

3. В группу добавляем нашего созданного бота и даём ему права администратора

4. Используя api запрос
   ([ссылка на документацию](https://core.telegram.org/api)) мы получаем ID
   нашей созданной группы

   ```js
   fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_ID}/getUpdates`)
     .then(res => res.json())
     .then(data => console.log(data));
   ```

5. ID группы как и токен бота, добавляем в .env файлы.

6. Используем fetch или axios для отправки сообщения.

```js
fetch(
  `${BASE_URL}/bot${TELEGRAM_BOT_ID}/sendMessage?chat_id=${TELEGRAM_GROUP_ID}&parse_mode=HTML&text=${text}`,
);
return res.ok ? res.json() : Promise.reject(new Error());
```

### Настройка формы:

Форма сделана на React Hook Form отправляется на Netlify Form с настройкой
отправки на почту.

1. Установить в проект

   ```powershell
   npm install react-hook-form @hookform/resolvers yup
   ```

   2 последних необходимы для создания схемы валидации.

2. В компоненте формы заиспортировать хук

   ```js
   import { useForm } from 'react-hook-form';
   ```

   Если будет схема валидации то еще :

   ```js
   import { yupResolver } from "@hookform/resolvers/yup";` `import * as yup from "yup";
   ```

3. Создаем схему по принципу :

   ```js
   const schema = yup
     .object({
       name: yup.string().required(),
       phone: yup.number().positive().integer().required(),
     })
     .required();
   ```

4. В компонент с формой добавляем хук деструктуризируя с него необходимые опции.
   Если будет схема то она вставляется как дефолтное свойство. Пример:

   ```js
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm({ resolver: yupResolver(schema) });
   ```

   Свойство register используется в инпутах в формате:

   ```js
   {...register('name')}
   ```

   А handleSubmit в теге form :

```js
onSubmit={handleSubmit(функция при отправке формы)}
```

5. Чтобы отправить форму на нетлифай в тег формы необходимо добавить:

   ```js
   method="post" data-netlify="true" data-netlify-honeypot="bot-field"
   ```

6. У формы должен быть атрибут name а также скрытый инпут:

   ```js
   <input type="hidden" name="form-name" value="Имя формы" />
   ```

7. Поскольку форма собирается с помощью
   [react hook form](https://react-hook-form.com/get-started#Quickstart) то для
   ее отправки необходимо использовать запрос :

   ```js
   fetch('/', {
     method: 'POST',
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
     body: encode({ 'form-name': 'contact', ...data }),
   })
     .then(() => alert('Success'))
     .catch(error => alert(error));
   ```

8. Дополнительно добавить :

   ```js
   const encode = data => {
     return Object.keys(data)
       .map(
         key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
       )
       .join('&');
   };
   ```

9. На Netlify в **Site settings** необходимо выбрать **Forms** и включить
   настройку принятия формы. Там же можно настроить отправку результата на
   электронную почту.

10. При необходимости сбросить форму есть свойство reset. Его деструктуризируют
    из хука useForm. После отправки указать:
    ```js
    reset({ name: '', phone: '', email: '' });
    ```
11. Запись данных в локал сторадж реализовала через библиотеку
    `react-hook-form-persist` Для использования достаточно заимпортировать

    ```js
    import useFormPersist from 'react-hook-form-persist';
    ```

    после чего использовать его в компоненте с настройками :

    ```js
     useFormPersist('form',{ watch, setValue, storage: localStorage,
     exclude: ['isAgree'], )});
    ```

    Значения `watch` и `setValue`, деструктуризируются из useForm. Gatsby не
    работает с LocalStorage и window поэтому нужно добавить проверку

    ```js
    const isBrowser = typeof window !== 'undefined';
    ```

    После чего указать в

    ```js
      storage: isBrowser ? window.localStorage : null,
    ```

!!! ВАЖНО: Tailwind и чекбокс. Чтобы чекбокс сработал при нажатии на лейбл ему
неообходимо добавить id

#### Добавление инпута с телефоном с помощью библиотеки React-Phone-Input-2:

1. Установить пакет:

   ```powershell
   npm i react-phone-input-2
   ```

2. Импортировать нужные стили в корень проекта или в компонент, к примеру:

   ```js
   import 'react-phone-input-2/lib/style.css';
   ```

3. Импортировать сам компонент из библиотеки:

   ```js
   import PhoneInput from 'react-phone-input-2';
   ```

4. Поскольку у нас присутствует локализация то добавить импорт пакета для
   соответствующего языка (по умолчанию английский, для украинского делали
   кастомный) :

```js
import ru from 'react-phone-input-2/lang/ru.json';
```

В зависимости от задачи PhoneInput можно передавать разные пропсы (подробнее в
библиотеке) например:

```js
  inputClass="h-5" country="ua" preferredCountries={["ua", "ru", "gb"]}
  onChangeText={onChange} value={value} localization={ru}
```

Чтобы использовать данный компонент в React hook form необходимо импортировать

```js
import { Controller } from 'react-hook-form';
```

Деструктуризировать из useForm свойство control Использовать компонент
Controller по примеру:

```js
<Controller
  control={control}
  rules={{ maxLength: 15 }}
  render={({ field: { onChange, value } }) => (
    <PhoneInput
      inputClass="h-5"
      country="ua"
      preferredCountries={['ua', 'ru', 'gb']}
    />
  )}
  name="phone"
/>
```

### Подключение Cloudinary

**Освновные действия.**

1. Установите исходный плагин, используя npm:

```powershell
npm install --save gatsby-source-cloudinary
```

2. Для начала вам понадобится учетная запись Cloudinary и Netlify CMS 2.3.0 или
   выше. Вы можете
   [зарегистрироваться в Cloudinary](https://cloudinary.com/users/register/free)
   бесплатно. После того, как вы вошли в систему, вам нужно будет получить имя
   вашего облака и ключ API в верхнем левом углу консоли Cloudinary.

**Подключение Cloudinary к Netlify CMS**

1. Чтобы использовать медиатеку Cloudinary в Netlify CMS, вам необходимо
   обновить файл конфигурации Netlify CMS `config.yml` информацией из вашей
   учетной записи Cloudinary:

```yml
media_library:
  name: cloudinary
  config:
    cloud_name: your_cloud_name
    api_key: your_api_key
```

2. Установите пакеты npm, чтобы
   [зарегистрировать медиатеки](https://www.netlifycms.org/blog/2019/07/netlify-cms-gatsby-plugin-4-0-0#using-media-libraries-with-netlify-cms-app):

```powershell
npm i netlify-cms-media-library-uploadcare
```

и

```powershell
npm i netlify-cms-media-library-cloudinary
```

В дополнение к registerMediaLibrary() обязательно укажите путь к точке входа для
настройки CMS в Gatsby через `gatsby-config.js`

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
```

3. В папке src, мы создаем следующую структуру:

```
|-- cms
    |-- cms.js
|-- cms
```

4. Базовые настройки `cms.js`

```js
import CMS from 'netlify-cms-app';

import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
```

5. Преобразование изображений через медиатеку, добавляем код в `config.yml`

```yml
media_library:
  name: cloudinary
  output_filename_only: false
  config:
    default_transformations:
      - - fetch_format: auto
          quality: auto
          crop: scale
```

**Подключение Google Analytics, Pixel, Google Tag Manager**

## [Инструкция по подключению](https://docs.google.com/document/d/1ELzBDKMTB0jVmjzQlmCsGSzoLYb09oFo0YP_k14_M0Y/)
