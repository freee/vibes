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
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import commonProps from '../../utilities/commonProps';
import Paragraph from '../../lv1/typography/Paragraph';
import { useDropFile } from './hooks';
import { CSSTransition } from 'react-transition-group';
import { MdBlock } from 'react-icons/md';
import vbClassNames from '../../utilities/vbClassNames';
var overlayClassName = function (partName, disabled) {
    return vbClassNames("vb-fileDropArea__".concat(partName), {
        modifier: { disabled: disabled },
    });
};
var DraggingContents = function (_a) {
    var fileLabel = _a.fileLabel, status = _a.status, processingMessage = _a.processingMessage, disabled = _a.disabled, disabledMessage = _a.disabledMessage;
    if (disabled) {
        return (React.createElement(React.Fragment, null,
            React.createElement(MdBlock, { className: overlayClassName('icon', true) }),
            React.createElement(Paragraph, null,
                React.createElement("div", { className: overlayClassName('contentDescription', true) }, disabledMessage !== null && disabledMessage !== void 0 ? disabledMessage : 'ドラッグ＆ドロップできません'))));
    }
    else if (status === 'uploading' || status === 'processing') {
        return (React.createElement(React.Fragment, null,
            React.createElement("svg", { className: "vb-fileDropArea__icon", width: "48", height: "48", role: "img" },
                React.createElement("path", { d: "M38.7 12.08C37.34 5.18 31.28 0 24 0c-5.78 0-10.8 3.28-13.3 8.08C4.68 8.72 0 13.82 0 20c0 6.62 5.38 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.1-9.56-9.3-9.92zM38 28H12c-4.42 0-8-3.58-8-8s3.58-8 8-8h1.42C14.74 7.38 18.96 4 24 4c6.08 0 11 4.92 11 11v1h3c3.32 0 6 2.68 6 6s-2.68 6-6 6z", id: "a" })),
            React.createElement(Paragraph, null,
                React.createElement("div", { className: "vb-fileDropArea__contentDescription" }, status === 'uploading' ? 'アップロード中' : processingMessage))));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement("svg", { className: "vb-fileDropArea__icon", width: "48", height: "48", role: "img" },
                React.createElement("path", { d: "M38.7 12.08C37.34 5.18 31.28 0 24 0c-5.78 0-10.8 3.28-13.3 8.08C4.68 8.72 0 13.82 0 20c0 6.62 5.38 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.1-9.56-9.3-9.92zM28 18v8h-8v-8h-6L24 8l10 10h-6z", id: "a" })),
            React.createElement(Paragraph, null,
                React.createElement("div", { className: "vb-fileDropArea__contentDescription" },
                    fileLabel,
                    "\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"))));
    }
};
var FileDropAreaInnerContainer = function (props) {
    var children = props.children, acceptFileTypes = props.acceptFileTypes, fileLabel = props.fileLabel, multiple = props.multiple, onFileSelect = props.onFileSelect, status = props.status, processingMessage = props.processingMessage, disabled = props.disabled, disabledMessage = props.disabledMessage;
    var nodeRef = React.useRef(null);
    var _a = useDropFile(disabled ? function () { return undefined; } : onFileSelect, acceptFileTypes, multiple), canDrop = _a.canDrop, isOver = _a.isOver, drop = _a.drop;
    var isDragging = status !== 'uploading' && canDrop && isOver;
    var isActive = isDragging || status === 'uploading' || status === 'processing';
    return (React.createElement("div", __assign({ ref: drop }, commonProps(props, 'vb-fileDropArea')),
        children,
        React.createElement(CSSTransition, { classNames: "vb-fileDropArea__fade", in: isActive, timeout: 300, exit: true, unmountOnExit: true, 
            // StrictModeで、"Warning: findDOMNode is deprecated in StrictMode."が出ないように
            // [FYI] https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
            nodeRef: nodeRef },
            React.createElement("div", { ref: nodeRef, className: overlayClassName('overlay', disabled) },
                React.createElement(DraggingContents, { fileLabel: fileLabel, status: status, processingMessage: processingMessage, disabled: disabled, disabledMessage: disabledMessage })))));
};
/**
 * D&Dでしか操作できないことを防ぐため、必ず「ファイル選択ボタン」か` <input type="file"> `と一緒に使ってください
 */
var FileDropArea = function (props) {
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement(FileDropAreaInnerContainer, __assign({}, props))));
};
export default FileDropArea;
//# sourceMappingURL=FileDropArea.js.map