# LocalStorage and SessionStorage 

## What is the Session Storage Object? 
The session storage object(`window.sessionStorage`) stores data that persists for only on session of an opened tab. 

In other words, whatever gets stored in the `window.sessionStorage` Object will not disappear on a reload of the web page. Instead, the computer will delete the stored data only when users close the browser tab or window. 

Note the following: 
 - the Data stored inside the session storage in per-origin ad per-instance. Means `http://campuscourse.com`s `sessionStorage` object is different from `https://freecodecamp.com`s sessionStorage object because the two origins use different schemes (`http` and `https`). 
 - Per-instance means per-window or per-tab. In other words, the `sessionStorage` objects lifespan expires once user close the instace (window or tab).
 - Session Storage is a property of the global `window` object. so `sessionStorage.setItem()` is equivalent to `window.sessionStorage.setItem()`.


## What iss the Local storage object? 
The local storage object (`window.localStorage`) stores data that persists even when users close their browser tab (or window). 

In other words, whatever get stored in the `window.localStorage` object will not disappear during a reload or reopening of the web page or when users close their browsers. Those data have no expiration time. Browsers ever clear them automatically. 

The computer will delete the `window.localStorage` object's content in the following instances only. 

 1. When the content gets cleared through JavaScript 
 2. When the browser's cache gets cleared 

### Note the following 
 - The `window.localStorage` object's storage limit is larger than the `window.sessionStorage`.
 - The data stored inside the local storage is per-origin. 
 - Local storage is a property of the global Window object. Therefore, `localStorage.setItem()` is equivalent to `window.localStorage.setItem()`.
