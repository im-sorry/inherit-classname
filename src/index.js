const t = require('@babel/types');

module.exports = function (params) {
  return {
    visitor: {
      JSXElement(path) {
        const hasInheritClassAttributes =
          path.node.openingElement.attributes.find((item) =>
            item.name ? item.name.name === 'inherit-class' : false
          );
        if (!hasInheritClassAttributes) return;

        const icl = hasInheritClassAttributes.value.value;
        if (!icl) return;
        let parentIcl = '';
        let { parentPath } = path;
        while (parentPath !== null) {
          if (parentPath.inheritClass) {
            parentIcl = parentPath.inheritClass;
            break;
          }
          parentPath = parentPath.parentPath;
        }
        if (parentIcl.includes(' ')) parentIcl = parentIcl.split(' ')[0];
        let className = `${parentIcl ? `${parentIcl}-` : ''}${icl}`;

        if (icl.includes(' ')) {
          const iclList = icl.split(' ').filter(Boolean);
          className = iclList
            .map((i) => `${parentIcl ? `${parentIcl}-` : ''}${i}`)
            .join(' ');
        }
        path.inheritClass = className;

        const hasClassNameAttributes = path.node.openingElement.attributes.find(
          (item) => (item.name ? item.name.name === 'className' : false)
        );

        if (hasClassNameAttributes) {
          hasClassNameAttributes.value.value = `${hasClassNameAttributes.value.value} ${className}`;
        } else {
          path.node.openingElement.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('className'),
              t.stringLiteral(className)
            )
          );
        }
      },
    },
  };
};
