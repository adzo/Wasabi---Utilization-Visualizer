// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


const us_regions_prefix = ['us', 'ca'];
const eu_regions_prefix = ['eu', 'eu'];
const apac_regions_prefix = ['ap'];

certLoading = false;
pingLoading = false;
numberOfLoadedCertificates = 0;
numberOfLoadedPings = 0;

// UI Event creation
reload_btn.addEventListener('click', () => {
    loadAvailableRegions();
})

//
//region Events Handling


