import squish from "object-squish";


function findMessages(locale) {
  const messageFolderPath = `./messages/${locale}`;

  const poc = require(`${messageFolderPath}/poc`).default;
  const feedback = require(`${messageFolderPath}/feedback`).default;
  const buttonLabels = require(`${messageFolderPath}/buttonLabels`).default;

  return squish({
    poc,
    feedback,
    buttonLabels
  });
}

export default findMessages;