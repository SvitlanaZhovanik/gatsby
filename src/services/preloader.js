import loadable from '@loadable/component';

const FeedbackList = loadable(() =>
  import('components/feedbackSection/FeedbackList'),
);
const StoriesList = loadable(() =>
  import('components/storiesSection/StoriesList'),
);
const SliderPriceCardsList = loadable(() =>
  import('components/priceSection/SliderPriceCardsList'),
);
const Form = loadable(() => import('components/form/Form'));

export const handleNavigationPreload = id => {
  switch (id) {
    case 'reviews':
      FeedbackList.preload();
      StoriesList.preload();
      break;
    case 'price':
      SliderPriceCardsList.preload();
      break;
    case 'contacts':
      Form.preload();
      break;
    default:
      break;
  }
};

export const handleMenuClickPreload = () => {
  FeedbackList.preload();
  SliderPriceCardsList.preload();
  StoriesList.preload();
  Form.preload();
};
