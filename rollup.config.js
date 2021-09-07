import { nodeResolve } from "@rollup/plugin-node-resolve";
// import image from "@rollup/plugin-image";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
// import less from "rollup-plugin-less";
import nodePolyfills from "rollup-plugin-node-polyfills";
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "es",
      sourcemap: true,
    },
  ],
  // external: ["react", "react-dom", "antd"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    commonjs(),
    nodeResolve({ preferBuiltins: false }),
    nodePolyfills(),
  ],
};
