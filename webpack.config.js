const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: {
    'js/app' : './src/js/app.js',
    'js/inicio' : './src/js/inicio.js',
    'js/login/index' : './src/js/login/index.js',
    'js/aplicaciones/index' : './src/js/aplicaciones/index.js',
    'js/permisos/index' : './src/js/permisos/index.js',
    'js/clientes/index' : './src/js/clientes/index.js',
    'js/marcas/index' : './src/js/marcas/index.js',
    'js/inventario/index' : './src/js/inventario/index.js',
    'js/ventas/index' : './src/js/ventas/index.js', 
    'js/reparaciones/index' : './src/js/reparaciones/index.js',
    'js/reportes/index' : './src/js/reportes/index.js',
    'js/usuarios/index' : './src/js/usuarios/index.js',
    'js/configuracion/index' : './src/js/configuracion/index.js',
    'js/historial/index' : './src/js/historial/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/build')
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset/resource',
      },
    ]
  }
};