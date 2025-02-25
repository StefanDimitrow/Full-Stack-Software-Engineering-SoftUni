// util.js
function parseError(err) {
  if (Array.isArray(err)) {
    // Assuming err is an array of validation errors
    return err.map(error => error.msg);
  } else if (err instanceof Error) {
    // General errors
    return [err.message];
  } else {
    // Unknown error format, just return as a single message
    return [JSON.stringify(err)];
  }
}

module.exports = { parseError };

