const ETHEREAL_NEXUS_ASSETS_BASE_SITE = 'https://etherealnexussadev.blob.core.windows.net';
const ETHEREAL_NEXUS_PROJECT = 'remote-components-aem-demo';

export function getEtherealNexusAssetURL(component, version = "latest") {
    return `${ETHEREAL_NEXUS_ASSETS_BASE_SITE}/${ETHEREAL_NEXUS_PROJECT}/${component}/${version}/index.js`;
}