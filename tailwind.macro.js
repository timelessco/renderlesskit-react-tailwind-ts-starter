const path = require("path");
const { get } = require("lodash");
const { cx } = require("@renderlesskit/react");
const { createMacro, MacroError } = require("babel-plugin-macros");
const { overrideTailwindClasses } = require("tailwind-override");

const components = require("./styles");

// String assertions
const isString = value =>
  Object.prototype.toString.call(value) === "[object String]";
const isObject = obj => obj && typeof obj === "object";
const ocx = (...classNames) => overrideTailwindClasses(cx(...classNames));

/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  const result = {};

  Object.keys(target).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (isString(targetValue) && isString(sourceValue)) {
      result[key] = ocx(targetValue, sourceValue);
    } else if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      result[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      result[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      result[key] = targetValue;
    }
  });

  return result;
}

const constructObject = (data, t) => {
  return t.objectExpression(
    Object.keys(data).map(key => {
      return t.objectProperty(t.stringLiteral(key), t.stringLiteral(data[key]));
    }),
  );
};

const configPath = path.resolve(".", "./tailwind.config.js");
const { components: userComponents } = require(configPath);

const mergedComponents = mergeDeep(components, userComponents);
console.log("%c mergedComponents", "color: #eeff00", mergedComponents);

module.exports = createMacro(function ({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const [componentPath] = referencePath.parentPath.get("arguments");

    if (!componentPath) {
      throw new MacroError("Expected 1 argument but got 0");
    }

    const argValue = componentPath.node.value;
    if (typeof argValue !== "string") {
      throw new MacroError(
        `Argument expected of type string but got ${typeof argValue}`,
      );
    }

    const themeValue = get(mergedComponents, argValue);
    if (typeof themeValue === "undefined") {
      throw new MacroError(
        `Unable to find component classes at path "${argValue}"`,
      );
    }
    const functionCallPath = componentPath.parentPath;

    if (typeof themeValue === "object") {
      const obj = constructObject(themeValue, babel.types);
      functionCallPath.replaceWith(babel.types.parenthesizedExpression(obj));
      return;
    }
    if (typeof themeValue === "string") {
      const strLiteral = babel.types.stringLiteral(themeValue);
      functionCallPath.replaceWith(strLiteral);
      return;
    }
  });
});

// unused
// function tailwindOverride({ references, state, babel }) {
//   references.default.forEach(referencePath => {
//     const args = referencePath.parentPath.get("arguments");

//     const stringLiterals = args.map(v => {
//       return v.node.value;
//     });
//     let classname = ocx(...stringLiterals);
//     const functionCallPath = args[0].parentPath;
//     const strLiteral = babel.types.stringLiteral(classname);
//     functionCallPath.replaceWith(strLiteral);
//   });
// }
