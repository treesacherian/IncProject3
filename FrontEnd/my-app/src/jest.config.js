module.exports = async () => {
    return {
      verbose: true,
      preset:'@babel/preset-react',
      transform: {
                 "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    globals: {
                transform: {
                    "transform_regex": [
                        'babel-jest', {
                            transformerConfig: {
                                transformIgnorePatterns: [
                                    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
                                    "jest-runner",
                                ],
                            },
                        }],
                }
            },
  };
// const config = {
//     verbose: true,
// };

// module.exports = config;

// module.exports = {
//     preset: "jest-expo",
//     transform: {
//         "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",

//     },
    


//     globals: {
//         transform: {
//             "transform_regex": [
//                 'babel-jest', {
//                     transformerConfig: {
//                         transformIgnorePatterns: [
//                             "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
//                             "jest-runner",
//                         ],
//                     },
//                 }],
//         }
//     },


//     testPathIgnorePatterns: [
//         "<rootDir>/node_modules/",
//         "<rootDir>/.maestro/",
//         "@react-native",
//     ],
//     testEnvironment: "react-native",
//     setupFiles: ["<rootDir>/test/setup.ts"],
//     setupFilesAfterEnv: ["<rootDir>/jest-setup-after-env.js"],
};