import WindiCSSAnimations from 'windicss-plugin-animations'
import WindiCSSForms from 'windicss-plugin-forms'

export const config = {
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#e7f6ec',
          '100': '#c5e8cf',
          '200': '#a0dab1',
          '300': '#78cc92',
          '400': '#59c07b',
          '500': '#38b564',
          '600': '#30a65a',
          '700': '#26934e',
          '800': '#1d8243',
          '900': '#0d632f'
        },
        'complementary': {
          '50': '#f8e6f2',
          '100': '#f0c0e0',
          '200': '#ea98cc',
          '300': '#e670b7',
          '400': '#e452a5',
          '500': '#e63692',
          '600': '#d4358b',
          '700': '#bc3282',
          '800': '#a6307a',
          '900': '#7e2a6b'
        },
        'darkgreen': {
          '50': '#e8f6e7',
          '100': '#c9e8c4',
          '200': '#a6d99f',
          '300': '#82cc77',
          '400': '#65c058',
          '500': '#49b538',
          '600': '#3fa630',
          '700': '#329424',
          '800': '#258319',
          '900': '#036400'
        },
        'darkteal': {
          '50': '#e0f2f0',
          '100': '#b3dfd9',
          '200': '#82cbc1',
          '300': '#52b6a8',
          '400': '#30a696',
          '500': '#189684',
          '600': '#158977',
          '700': '#127968',
          '800': '#0f6959',
          '900': '#094d3e'
        },
        'triadsky': {
          '50': '#e3f5fa',
          '100': '#b8e6f3',
          '200': '#8cd5eb',
          '300': '#68c5e3',
          '400': '#52b8df',
          '500': '#43acda',
          '600': '#3c9ecc',
          '700': '#338bba',
          '800': '#307aa6',
          '900': '#255b84'
        },
        'triadpurple': {
          '50': '#eee8f6',
          '100': '#d3c5e9',
          '200': '#b79fda',
          '300': '#9b78cc',
          '400': '#855ac0',
          '500': '#703db5',
          '600': '#6738af',
          '700': '#5b30a6',
          '800': '#502a9e',
          '900': '#3e1e8f'
        },
      },
    },
  },
  plugins: [
    WindiCSSAnimations({
      settings: {
        animateSpeed: 1000,
      },
    }),
    WindiCSSForms,
  ],
}
