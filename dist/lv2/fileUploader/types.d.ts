export declare const FileTypes: {
    readonly CSV: "text/csv";
    readonly TSV: "text/tab-separated-values";
    readonly TXT: "text/plain";
    readonly JPG: "image/jpeg";
    readonly PNG: "image/png";
    readonly GIF: "image/gif";
    readonly PDF: "application/pdf";
    readonly XLS: "application/vnd.ms-excel";
    readonly XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    readonly DOC: "application/msword";
    readonly DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    readonly PPT: "application/vnd.ms-powerpoint";
    readonly PPTX: "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    readonly ZIP: "application/zip";
};
export declare type FileType = typeof FileTypes[keyof typeof FileTypes];
export declare const FileUploaderStatus: {
    readonly DEFAULT: "default";
    readonly SELECTED: "selected";
    readonly UPLOADING: "uploading";
    readonly PROCESSING: "processing";
};
export declare type FileUploaderStatus = typeof FileUploaderStatus[keyof typeof FileUploaderStatus];
/** @deprecated Use `FileUploadedStatus` type instead. */
export declare type FileStatus = FileUploaderStatus;
export declare const FileExtensions: {
    [key: string]: string[];
};
export declare const ImageTypes: FileType[];
