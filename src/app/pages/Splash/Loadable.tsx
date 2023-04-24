/**
 * Asynchronously loads the component for splash screen
 */

import { lazyLoad } from 'src/utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Backdrop } from 'app/components/Backdrop';

export const Splash = lazyLoad(
  () => import('./index'),
  module => module.SplashPage,
  {
    fallback: (
      <Backdrop>
        <LoadingIndicator />
      </Backdrop>
    ),
  },
);
