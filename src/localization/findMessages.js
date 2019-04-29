import squish from "object-squish";


function findMessages(locale) {
  const messageFolderPath = `./messages/${locale}`;

  const poc = require(`${messageFolderPath}/poc`).default;
  const feedback = require(`${messageFolderPath}/feedback`).default;

  return squish({
    poc,
    feedback
  });
}

export default findMessages;