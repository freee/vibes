var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import PageTitle from '../../lv1/typography/PageTitle';
import Paragraph from '../../lv1/typography/Paragraph';
import WithSideContent from '../../lv1/layout/WithSideContent';
import StatusIcon from '../../lv1/icons/StatusIcon';
import commonProps from '../../utilities/commonProps';
import { SkeletonPageTitle } from '../skeleton/SkeletonPageTitle';
import { SkeletonParagraph } from '../skeleton/SkeletonParagraph';
var HeadlineAreaInternal = function (props, ref) {
    var pageTitle = props.pageTitle, children = props.children, statusIconType = props.statusIconType, statusIconText = props.statusIconText, loading = props.loading, relatedMenus = props.relatedMenus;
    return (React.createElement("div", __assign({}, commonProps(props, 'vb-headlineArea', {})),
        React.createElement(WithSideContent, { sideContent: relatedMenus, mb: children ? 1 : undefined }, loading ? (React.createElement(SkeletonPageTitle, null)) : (React.createElement(PageTitle, { ref: ref },
            pageTitle,
            statusIconText && (React.createElement(StatusIcon, { type: statusIconType, marginLeft: true, marginSize: "small" }, statusIconText))))),
        children && loading ? (React.createElement(SkeletonParagraph, null)) : (React.createElement(Paragraph, null, children))));
};
/**
 * 画面上部に配置する、見出し、関連メニュー、画面の説明が一体となったコンポーネントです
 */
var HeadlineArea = React.forwardRef(HeadlineAreaInternal);
export default HeadlineArea;
//# sourceMappingURL=HeadlineArea.js.map