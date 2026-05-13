

const bytes = require('bytes');

module.exports = {
  async fn() {
    let { storageLimit } = await InternalConfig.qm.getOneMain();
    storageLimit = bytes(storageLimit);

    if (storageLimit === null) {
      return null;
    }

    const storageUsage = await StorageUsage.qm.getOneMain();
    return BigInt(storageLimit) - BigInt(storageUsage.total);
  },
};
