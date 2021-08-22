// If you need global CSS, you can import it here and Storybook will automatically include it in all stories.
// You don't need this if you don't have any global CSS.
import '!style-loader!css-loader!resolve-url-loader!sass-loader!../styles/app.scss';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 11.2

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light gray',
    values: [
      {
        name: 'white',
        value: '#ffffff'
      },
      {
        name: 'light gray',
        value: '#d7d7d7'
      },
      {
        name: 'dark green',
        value: '#345c45'
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}
  }
};
