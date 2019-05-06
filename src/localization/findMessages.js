import squish from "object-squish";


function findMessages(locale) {
  const messageFolderPath = `./messages/${locale}`;

  const feedback = require(`${messageFolderPath}/feedback`).default;
  const buttonLabels = require(`${messageFolderPath}/buttonLabels`).default;

  return squish({
    feedback,
    buttonLabels
  });
}

export default findMessages;