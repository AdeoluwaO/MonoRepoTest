// module.exports = {
//     presets: [
//       [
//         "@babel/preset-env",
//         {
//           "targets": {
//             "node": "current"
//           }
//         }
//       ],
//       "@babel/preset-react",
//       "module:metro-react-native-babel-preset"
//     ],
//     plugins: [
//       "@babel/plugin-proposal-class-properties",
//       "@babel/plugin-transform-runtime"
//     ]
//   }

module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            [
              "@babel/preset-env",
              {
                "targets": {
                  "node": "current"
                }
              }
            ],
            "@babel/preset-react",
            "module:metro-react-native-babel-preset"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
          ]
    };
  };
  