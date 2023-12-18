var _a;
export var FileTypes = {
    CSV: 'text/csv',
    TSV: 'text/tab-separated-values',
    TXT: 'text/plain',
    JPG: 'image/jpeg',
    PNG: 'image/png',
    GIF: 'image/gif',
    PDF: 'application/pdf',
    XLS: 'application/vnd.ms-excel',
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    DOC: 'application/msword',
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    PPT: 'application/vnd.ms-powerpoint',
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ZIP: 'application/zip',
};
export var FileUploaderStatus = {
    DEFAULT: 'default',
    SELECTED: 'selected',
    UPLOADING: 'uploading',
    PROCESSING: 'processing',
};
export var FileExtensions = (_a = {},
    _a[FileTypes.CSV] = ['.csv'],
    _a[FileTypes.TSV] = ['.tsv'],
    _a[FileTypes.TXT] = ['.txt'],
    _a[FileTypes.JPG] = ['.jpg', '.jpeg'],
    _a[FileTypes.PNG] = ['.gif'],
    _a[FileTypes.PDF] = ['.pdf'],
    _a[FileTypes.XLS] = ['.xls'],
    _a[FileTypes.XLSX] = ['.xlsx'],
    _a[FileTypes.DOC] = ['.doc'],
    _a[FileTypes.DOCX] = ['.docx'],
    _a[FileTypes.PPT] = ['.ppt'],
    _a[FileTypes.PPTX] = ['.pptx'],
    _a[FileTypes.ZIP] = ['.zip'],
    _a);
export var ImageTypes = [
    FileTypes.JPG,
    FileTypes.PNG,
    FileTypes.GIF,
];
//# sourceMappingURL=types.js.map