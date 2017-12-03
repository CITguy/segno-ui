/*
const ELEMENTS = {
    DsBusy: require('./scripts/DsBusy'),
    DsDisclosure: require('./scripts/DsDisclosure'),
    DsElement: require('./scripts/DsElement'),
    DsIcon: require('./scripts/DsIcon'),
    DsProgress: require('./scripts/DsProgress'),
    DsReveal: require('./scripts/DsReveal'),
    DsTab: require('./scripts/DsTab'),
    DsTabcontent: require('./scripts/DsTabcontent'),
    DsTablist: require('./scripts/DsTablist'),
    DsTabpanel: require('./scripts/DsTabpanel'),
    DsTabset: require('./scripts/DsTabset'),
};
*/

window.addEventListener('WebComponentsReady', function () {
    require('./scripts/DsBusy').$define();
    require('./scripts/DsDisclosure').$define();
    require('./scripts/DsIcon').$define();
    require('./scripts/DsProgress').$define();
    require('./scripts/DsReveal').$define();
    require('./scripts/DsTab').$define();
    require('./scripts/DsTabcontent').$define();
    require('./scripts/DsTablist').$define();
    require('./scripts/DsTabpanel').$define();
    require('./scripts/DsTabset').$define();

    //for (let ctor in ELEMENTS) {
    //    customElements.define(ctor.is, ctor);
    //}
});

//module.exports = ELEMENTS;
//console.log('module.exports', module.exports);
