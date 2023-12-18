export const FileTypes = {
  CSV: 'text/csv',
  TSV: 'text/tab-separated-values', // tab区切りファイルのMIMEタイプ参考: https://www.iana.org/assignments/media-types/text/tab-separated-values
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
} as const;

export type FileType = typeof FileTypes[keyof typeof FileTypes];

export const FileUploaderStatus = {
  DEFAULT: 'default',
  SELECTED: 'selected',
  UPLOADING: 'uploading',
  PROCESSING: 'processing',
} as const;

export type FileUploaderStatus =
  typeof FileUploaderStatus[keyof typeof FileUploaderStatus];

/** @deprecated Use `FileUploadedStatus` type instead. */
export type FileStatus = FileUploaderStatus;

export const FileExtensions: { [key: string]: string[] } = {
  [FileTypes.CSV]: ['.csv'],
  [FileTypes.TSV]: ['.tsv'],
  [FileTypes.TXT]: ['.txt'],
  [FileTypes.JPG]: ['.jpg', '.jpeg'],
  [FileTypes.PNG]: ['.gif'],
  [FileTypes.PDF]: ['.pdf'],
  [FileTypes.XLS]: ['.xls'],
  [FileTypes.XLSX]: ['.xlsx'],
  [FileTypes.DOC]: ['.doc'],
  [FileTypes.DOCX]: ['.docx'],
  [FileTypes.PPT]: ['.ppt'],
  [FileTypes.PPTX]: ['.pptx'],
  [FileTypes.ZIP]: ['.zip'],
};

export const ImageTypes: FileType[] = [
  FileTypes.JPG,
  FileTypes.PNG,
  FileTypes.GIF,
];
