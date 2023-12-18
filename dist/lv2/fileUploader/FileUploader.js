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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { MdBlock, MdRefresh } from 'react-icons/md';
import CsvUploadIllust from '../../lv1/images/CsvUploadIllust';
import CloudUploadIllust from '../../lv1/images/CloudUploadIllust';
import FileUploadIllust from '../../lv1/images/FileUploadIllust';
import ImageUploadIllust from '../../lv1/images/ImageUploadIllust';
import CloudSkeletonIllust from '../../lv1/images/CloudSkeletonIllust';
import Button from '../../lv1/buttons/Button';
import Paragraph from '../../lv1/typography/Paragraph';
import commonProps from '../../utilities/commonProps';
import vbClassNames from '../../utilities/vbClassNames';
import { useDropFile } from './hooks';
import { FileTypes, ImageTypes, FileExtensions, } from './types';
import { VisuallyHidden } from '../..';
var getFileIllust = function (mimeTypes) {
    if (!mimeTypes) {
        return FileUploadIllust;
    }
    else if (mimeTypes.every(function (value) { return ImageTypes.indexOf(value) >= 0; })) {
        return ImageUploadIllust;
    }
    else if (mimeTypes.length === 1 && mimeTypes[0] === FileTypes.CSV) {
        return CsvUploadIllust;
    }
    return FileUploadIllust;
};
var FileUploaderInner = function (props) {
    var acceptFileTypes = props.acceptFileTypes, canDrop = props.canDrop, connectDropTarget = props.connectDropTarget, invalidFileDropped = props.invalidFileDropped, fileLabel = props.fileLabel, fileName = props.fileName, isOver = props.isOver, marginBottom = props.marginBottom, marginLeft = props.marginLeft, marginRight = props.marginRight, marginSize = props.marginSize, marginTop = props.marginTop, multiple = props.multiple, onFileSelect = props.onFileSelect, _a = props.status, status = _a === void 0 ? 'default' : _a, _b = props.processingMessage, processingMessage = _b === void 0 ? '処理中' : _b, width = props.width, type = props.type;
    var fileInputRef = React.useRef(null);
    var handleFileSelected = React.useCallback(function (event) {
        var _a;
        if (status === 'uploading') {
            return;
        }
        var files = Array.from((_a = event.target.files) !== null && _a !== void 0 ? _a : []);
        if (!files.length) {
            return;
        }
        onFileSelect(files);
        // 同じファイル名をアップロードしようとするとvalueが同じなのでonChangeが発火されないのでvalueを空にしておく
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [onFileSelect, status]);
    var isDragging = status !== 'uploading' && canDrop && isOver;
    var classModifier = {
        widthMedium: width === 'medium' || !width,
        widthFull: width === 'full',
        typeNormal: type === 'normal' || !type,
        typeCompact: type === 'compact',
        active: isDragging,
        error: invalidFileDropped,
    };
    var FileIllust = getFileIllust(acceptFileTypes);
    var acceptValue = acceptFileTypes
        ? acceptFileTypes
            .reduce(function (prev, t) { return prev.concat([t], FileExtensions[t] || []); }, [])
            .join(',')
        : undefined;
    var handleClick = function () {
        // eventを作ってinputに発火させる
        var evt = document.createEvent('mouseevent');
        evt.initEvent('click', false, false);
        fileInputRef.current && fileInputRef.current.dispatchEvent(evt);
    };
    return (React.createElement("div", __assign({ ref: connectDropTarget }, commonProps(props, 'vb-fileUploader', classModifier, {
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginSize: marginSize,
    })),
        React.createElement("div", { className: "vb-fileUploader__dropMessage", "aria-hidden": !isDragging },
            React.createElement("div", { className: "vb-fileUploader__contentIllust" },
                React.createElement(CloudUploadIllust, { mb: 1 })),
            React.createElement("div", { className: "vb-fileUploader__contentDescription" },
                React.createElement(Paragraph, { marginBottom: true },
                    fileLabel,
                    "\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"))),
        React.createElement(VisuallyHidden, { autoRead: true, assertive: true }, invalidFileDropped ? 'このファイル形式は受け付けられません' : ''),
        React.createElement("div", { className: "vb-fileUploader__errorMessage", "aria-hidden": !invalidFileDropped },
            React.createElement(MdBlock, { className: 'vb-fileUploader__icon' }),
            React.createElement("div", { className: "vb-fileUploader__contentDescription" },
                React.createElement(Paragraph, { marginBottom: true }, "\u3053\u306E\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u306F\u53D7\u3051\u4ED8\u3051\u3089\u308C\u307E\u305B\u3093"))),
        status === 'uploading' && (React.createElement("div", { className: vbClassNames('vb-fileUploader__content', {
                modifier: { disabled: invalidFileDropped },
            }) },
            React.createElement("div", { className: "vb-fileUploader__contentIllust" },
                React.createElement(CloudSkeletonIllust, { mb: 1 })),
            React.createElement("div", { className: "vb-fileUploader__contentDescription" },
                React.createElement(Paragraph, null, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D")))),
        status === 'processing' && (React.createElement("div", { className: vbClassNames('vb-fileUploader__content', {
                modifier: { disabled: invalidFileDropped },
            }) },
            React.createElement("div", { className: "vb-fileUploader__contentIllust" },
                React.createElement(CloudSkeletonIllust, { mb: 1 })),
            React.createElement("div", { className: "vb-fileUploader__contentDescription" },
                React.createElement(Paragraph, null, processingMessage)))),
        status === 'selected' && (React.createElement("div", { className: vbClassNames('vb-fileUploader__content', {
                modifier: { disabled: invalidFileDropped },
            }), "aria-hidden": isDragging },
            React.createElement("div", { className: "vb-fileUploader__contentIllust" },
                React.createElement(FileIllust, { mb: 1 })),
            React.createElement("div", { className: "vb-fileUploader__contentDescription" },
                fileName && React.createElement(Paragraph, { mb: 1 }, fileName),
                React.createElement(Button, { IconComponent: MdRefresh, onClick: handleClick, disabled: invalidFileDropped, type: "button" }, "\u30D5\u30A1\u30A4\u30EB\u3092\u518D\u9078\u629E")))),
        status === 'default' && (React.createElement("div", { className: vbClassNames('vb-fileUploader__content', {
                modifier: { disabled: invalidFileDropped },
            }), "aria-hidden": isDragging },
            React.createElement("div", { className: "vb-fileUploader__contentIllust" },
                React.createElement(FileIllust, { mb: 1 })),
            React.createElement("div", { className: "vb-fileUploader__contentDescription" },
                React.createElement(Paragraph, { mb: 1 },
                    fileLabel,
                    "\u3092\u3053\u3053\u306B\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7"),
                React.createElement(Paragraph, { mb: 1 }, "\u307E\u305F\u306F"),
                React.createElement(Button, { onClick: handleClick, disabled: invalidFileDropped, type: "button" }, "\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E")))),
        React.createElement("input", { accept: acceptValue, multiple: multiple, onChange: handleFileSelected, ref: fileInputRef, style: { display: 'none' }, type: "file" })));
};
var FileUploaderInnerContainer = function (props) {
    var acceptFileTypes = props.acceptFileTypes, isUploading = props.isUploading, multiple = props.multiple, onFileSelect = props.onFileSelect, tmpStatus = props.status, others = __rest(props, ["acceptFileTypes", "isUploading", "multiple", "onFileSelect", "status"]);
    // status が設定されていない場合は isUploading の値を status に変換して props から isUploading を取り除く
    var status = tmpStatus !== null && tmpStatus !== void 0 ? tmpStatus : (isUploading ? 'uploading' : 'default');
    var _a = useDropFile(onFileSelect, acceptFileTypes, multiple), canDrop = _a.canDrop, isOver = _a.isOver, drop = _a.drop, invalidFileDropped = _a.invalidFileDropped;
    return (React.createElement(FileUploaderInner, __assign({}, others, { acceptFileTypes: acceptFileTypes, canDrop: canDrop, connectDropTarget: drop, isOver: isOver, invalidFileDropped: invalidFileDropped, multiple: multiple, onFileSelect: onFileSelect, status: status })));
};
var FileUploader = function (props) {
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement(FileUploaderInnerContainer, __assign({}, props))));
};
export default FileUploader;
//# sourceMappingURL=FileUploader.js.map