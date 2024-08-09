const path = require('path');
let path1 = './src/styles/'
let outpath = __dirname + 'dist/css/'

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
// path.resolve(__dirname, "node_modules")

module.exports = {
    entry: './index.js',
    mode:'development',

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,

    },
    devServer: {
        static: {
            static: 'dist',

            // directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9002,
        historyApiFallback: true,
    },
    module: {
        rules: [{
                test: /\.less$/,
                exclude: /node_modules/,
                // loader: 'style-loader!css-loader!less-loader', // compiles Less to CSS
                use: ['style-loader', 'css-loader', 'less-loader'],
                // use: [{
                    
                //     options: {
                //         // includePaths: ["./src/styles/styles.less", ".style.css"],
                //         // minimize: true,
                //         // implementation: require.resolve("less"),

                        // lessLogAsWarnOrErr: true,
                //     }
                // }]
                
                
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
        template: "./index.html"
    }),
        new CopyPlugin({
            patterns: [
                { from: "./src/static/images", to: "images" },
                { from: "./node_modules/animate.less/animate.min.css", to: "css" },
                { from: "./src/styles/owlcarousel/owl.carousel.min.css", to: "css" },
                
                // { from: "./src/styles/styles.min.css", to: "css" },

                { from: "./src/scripts/parallax.min.js", to: "scripts" },
                { from: "./src/scripts/jquery-3.7.1.min.js", to: "scripts" },
                { from: "./src/scripts/owl.carousel.min.js", to: "scripts" },
                { from: "./src/scripts/wow.min.js", to: "scripts" },
                { from: "./src/scripts/jquery.inputmask.min.js", to: "scripts" },
                { from: "./src/static/fonts/*.*", to: "fonts" },

 
// <script src="scripts/jquery-3.7.1.min.js"></script>
// <script src="scripts/owl.carousel.min.js"></script>
// <script src="scripts/jquery.inputmask.min.js"></script>
// <script src="scripts/paralax/parallax.min.js"></script>
// <script src="scripts/wow.min.js"></script>
// <script src="index.js"></script>

                // { from: "./node_modules/admin-lte/plugins/fullcalendar/locales/sk.js", to: "js/fullcalendar-locale-sk.js" },
                // { from: "./.env", to: "./" }
            ],
        }),
        // new ExtractTextPlugin("styles.css"),
    ],
};
// module.exports = config;