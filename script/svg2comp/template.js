const propTypesTemplate = ({ componentName, jsx, exports }, { tpl }) => {
  jsx.openingElement.name.name = "Svg";
  jsx.closingElement.name.name = "Svg";
  return tpl`
  import Svg from "..";
  import { SvgProps } from "../@types";

function ${componentName}(props : SvgProps) {
  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
