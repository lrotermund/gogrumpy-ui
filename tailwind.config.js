
module.exports = {
  theme: {
    extend: {
      colors: {
        sharkdark: '#212126',
        sharkdark70: '#212126B3',
        gopherblue: '#7fd5ea',
        secondaryyellow: '#f2dc5d',
      },
      boxShadow: {
        "left-2xl": '-8px 25px 50px -12px rgba(0, 0, 0, .50)',
      },
      inset: {
        '-600': '-600px',
        '-full': '-100%',
      },      
      transitionProperty: {
        'absolute': 'right, left, top, bottom',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      width: {
        '600': '600px'
      },
      minHeight: {
        '450': '450px',
        '315': '315px',
      },
    },
  },
  variants: {
    backgroundColor: ['group-hover', 'hover'],
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
