import {compress, decompress} from 'lz-string';

/**
 * StorageHelper class
 *
 * @export
 * @class StorageHelper
 */
export default class StorageHelper {

  /**
   * Creates an instance of StorageHelper.
   * @param {(localStorage|sessionStorage)} storageProvider Storage provider, localStorage or sessionStorage
   * @param {boolean} [compressed=false] Option to use compression for strings
   * @memberof StorageHelper
   */
  constructor(storageProvider, compressed = false) {
    this.provider = storageProvider;
    this.compressed = compressed;
  }

  /**
   * Checks if selected format is JSON
   *
   * @static
   * @private
   * @param {('text'|'json')} format Input format
   * @returns {boolean} Whether it is JSON
   * @memberof StorageHelper
   */
  static isJSONSelected(format) {
    return format === 'json';
  }

  /**
   * Parses JSON string to JSON object
   *
   * @private
   * @param {string} jsonString The JSON string representation
   * @returns {any} The parsed JSON content
   * @memberof StorageHelper
   */
  parseJSON(jsonString) {
    const toParse = this.compressed ? decompress(jsonString) : jsonString;
    return JSON.parse(toParse);
  }

  /**
   * Converts JSON to string representation
   *
   * @private
   * @param {any} json JSON to convert to string
   * @returns {string} JSON string representation
   * @memberof StorageHelper
   */
  stringifyJSON(json) {
    const str = JSON.stringify(json);
    return this.compressed ? compress(str) : str;
  }

  /**
   * Stores data to storageProvider
   *
   * @param {string} key Key used to identify saved item
   * @param {(string|object)} data Data to save
   * @param {('text'|'json')} [format="text"] Data format
   * @returns {void}
   * @memberof StorageHelper
   */
  store(key, data, format = 'text') {
    const dataToStore = StorageHelper.isJSONSelected(format)
      ? this.stringifyJSON(data)
      : data;
    this.provider.setItem(key, dataToStore);
  }

  /**
   * Gets key from storageProvider
   *
   * @param {string} key Key to retrieve from storage
   * @param {('text'|'json')} [format="text"] Format of stored data
   * @returns {any} - The value of said key
   * @memberof StorageHelper
   */
  get(key, format = 'text') {
    const data = this.provider.getItem(key);

    let toReturn = null;

    if (StorageHelper.isJSONSelected(format)) {
      try {
        toReturn = this.parseJSON(data);
      } catch (e) {
        toReturn = null;
      }
    } else {
      toReturn = data;
    }

    return toReturn;
  }
}
