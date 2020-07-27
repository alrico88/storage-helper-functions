<a name="StorageHelper"></a>

## StorageHelper

**Kind**: global class

- [StorageHelper](#StorageHelper)
  - [new StorageHelper()](#new_StorageHelper_new)
  - [.module.exports](#StorageHelper.module.exports)
    - [new module.exports(storageProvider, [compressed])](#new_StorageHelper.module.exports_new)
  - [.store(key, data, [format])](#StorageHelper.store) ⇒ <code>void</code>
  - [.get(key, [format])](#StorageHelper.get) ⇒ <code>any</code>

<a name="new_StorageHelper_new"></a>

### new StorageHelper()

StorageHelper class

<a name="StorageHelper.module.exports"></a>

### StorageHelper.module.exports

**Kind**: static class of [<code>StorageHelper</code>](#StorageHelper)  
<a name="new_StorageHelper.module.exports_new"></a>

#### new module.exports(storageProvider, [compressed])

Creates an instance of StorageHelper.

| Param           | Type                                                     | Default            | Description                                      |
| --------------- | -------------------------------------------------------- | ------------------ | ------------------------------------------------ |
| storageProvider | <code>localStorage</code> \| <code>sessionStorage</code> |                    | Storage provider, localStorage or sessionStorage |
| [compressed]    | <code>boolean</code>                                     | <code>false</code> | Option to use compression for strings            |

<a name="StorageHelper.store"></a>

### StorageHelper.store(key, data, [format]) ⇒ <code>void</code>

Stores data to storageProvider

**Kind**: static method of [<code>StorageHelper</code>](#StorageHelper)

| Param    | Type                                                           | Default                       | Description                     |
| -------- | -------------------------------------------------------------- | ----------------------------- | ------------------------------- |
| key      | <code>string</code>                                            |                               | Key used to identify saved item |
| data     | <code>string</code> \| <code>object</code>                     |                               | Data to save                    |
| [format] | <code>&#x27;text&#x27;</code> \| <code>&#x27;json&#x27;</code> | <code>&quot;text&quot;</code> | Data format                     |

<a name="StorageHelper.get"></a>

### StorageHelper.get(key, [format]) ⇒ <code>any</code>

Gets key from storageProvider

**Kind**: static method of [<code>StorageHelper</code>](#StorageHelper)  
**Returns**: <code>any</code> - - The value of said key

| Param    | Type                                                           | Default                       | Description                  |
| -------- | -------------------------------------------------------------- | ----------------------------- | ---------------------------- |
| key      | <code>string</code>                                            |                               | Key to retrieve from storage |
| [format] | <code>&#x27;text&#x27;</code> \| <code>&#x27;json&#x27;</code> | <code>&quot;text&quot;</code> | Format of stored data        |
