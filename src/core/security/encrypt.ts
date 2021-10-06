const encrypt = (message: string, secret: string) => {
  return CryptoJS.AES.encrypt(message, secret).toString();
};

const decrypt = (message: string, secret: string) => {
  return CryptoJS.AES.decrypt(message, secret).toString(CryptoJS.enc.Utf8);
};

export {};
