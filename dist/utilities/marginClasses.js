import functionalMarginClasses from './functionalMarginClasses';
function marginSizeToRem(marginSize) {
    switch (marginSize) {
        case 'xSmall':
            return 0.25;
        case 'small':
            return 0.5;
        case 'large':
            return 1.5;
        case 'xLarge':
            return 2;
        case 'xxLarge':
            return 3;
    }
    return 1;
}
export var pickMarginClassProps = function (_a) {
    var marginTop = _a.marginTop, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginBottom = _a.marginBottom, marginSize = _a.marginSize;
    return ({
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginSize: marginSize,
    });
};
export var marginClassPropsToFunctionalMarginProps = function (_a) {
    var marginTop = _a.marginTop, marginLeft = _a.marginLeft, marginRight = _a.marginRight, marginBottom = _a.marginBottom, marginSize = _a.marginSize;
    var remSize = marginSizeToRem(marginSize);
    return {
        mt: marginTop ? remSize : undefined,
        mb: marginBottom ? remSize : undefined,
        ml: marginLeft ? remSize : undefined,
        mr: marginRight ? remSize : undefined,
    };
};
export default function marginClasses(props) {
    return functionalMarginClasses(marginClassPropsToFunctionalMarginProps(props)).split(' ');
}
//# sourceMappingURL=marginClasses.js.map