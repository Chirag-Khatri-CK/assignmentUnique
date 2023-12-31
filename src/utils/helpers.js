const helpers = {
  secureEmail(userEmail) {
    const [email, domain] = userEmail.split("@");
    const encryptedEmail = `${email.slice(0, 3)}***@${domain}`;
    return encryptedEmail;
  },
  generatePartialHexCode() {
    const characters = "0123456789abcdef";
    const digitToShow = 4;
    const hexCodeDigits = 16;
    let code = "";
    for (let i = 0; i < hexCodeDigits; i++) {
      const isVisible = i < digitToShow || i >= hexCodeDigits - digitToShow;
      if (isVisible) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters.charAt(randomIndex);
        code += randomCharacter;
      } else {
        code += ".";
      }
    }
    return code;
  },
};

export default helpers;
