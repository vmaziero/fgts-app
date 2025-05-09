export default {
    presets: [
      'jest',
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript'
    ]
  };