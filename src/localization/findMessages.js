function findMessages(locale) {
  const messageFolderPath = `./messages/${locale}`;

  const feedback = require(`${messageFolderPath}/feedback`).default;
  const buttonLabels = require(`${messageFolderPath}/buttonLabels`).default;

  return {
    feedback,
    buttonLabels
  };
}

export default findMessages;