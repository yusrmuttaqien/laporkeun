import filetype from 'file-type';

export default async function detectFileType(type, file, exts) {
  let ext;

  switch (type) {
    default:
      ext = await filetype.fromFile(file);
  }

  return exts.includes(ext);
}
