var _a;
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { FileTypes } from './types';
// FileTypesに加えてAcceptする必要のあるMIME types
var extraMIME = (_a = {},
    // ExcelのインストールされたWindowsマシンではMIMEタイプがExcelになっていることがある……
    _a[FileTypes.CSV] = [FileTypes.XLS],
    _a);
var filterFiles = function (files, mimeTypes, multiple) {
    if (!mimeTypes || mimeTypes.length === 0) {
        return multiple ? files : files.slice(0, 1);
    }
    var acceptableTypes = mimeTypes.reduce(function (prev, type) { return prev.concat([type], extraMIME[type] || []); }, []);
    // MIME typeと一致しているもののみを返す
    // ただしIE/EdgeでMIME typeが扱えない問題があるので、typeが空文字列のものは許容する
    var filtered = files.filter(function (file) { return acceptableTypes.indexOf(file.type) >= 0 || file.type === ''; });
    return multiple ? filtered : filtered.slice(0, 1);
};
export var useDropFile = function (onFileSelect, acceptFileTypes, multiple) {
    var _a = useState(false), invalidFileDropped = _a[0], setInvalidFileUploaded = _a[1];
    var _b = useDrop({
        accept: NativeTypes.FILE,
        drop: function (item // react-dnd 側の型が間違っているかも。DragObjectWithType を求められるが 実際には { files: Array<File> } のみ
        ) {
            if (status === 'uploading') {
                return;
            }
            var droppedFiles = item.files;
            var filteredFiles = filterFiles(droppedFiles, acceptFileTypes, !!multiple);
            if (filteredFiles.length > 0) {
                onFileSelect(filteredFiles);
            }
            else {
                setInvalidFileUploaded(true);
                setTimeout(function () {
                    setInvalidFileUploaded(false);
                }, 3000);
            }
        },
        collect: function (monitor) { return ({
            canDrop: !!monitor.canDrop(),
            isOver: !!monitor.isOver(),
        }); },
    }), _c = _b[0], canDrop = _c.canDrop, isOver = _c.isOver, drop = _b[1];
    return { canDrop: canDrop, isOver: isOver, drop: drop, invalidFileDropped: invalidFileDropped };
};
//# sourceMappingURL=hooks.js.map