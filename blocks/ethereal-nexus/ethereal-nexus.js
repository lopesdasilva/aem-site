import { getEtherealNexusAssetURL } from './ethereal-nexus.config.js';

export default async function decorate(block) {
  const obj = {
    component: block.children[0].children[1].textContent,
    props: [],
  };

  obj.props = Array.from(block.children).slice(1).map((child) => ({
    [child.children[0].textContent]: child.children[1].textContent,
  }));

  const etherealNexusAssetURL = getEtherealNexusAssetURL(obj.component, '0.0.1');

  await import(etherealNexusAssetURL);

  const props = obj.props.map((prop) => {
    const key = Object.keys(prop)[0];
    const value = prop[key];
    return `${key}="${value}"`;
  }).join(' ');

  block.innerHTML = `<${obj.component} ${props}/>`;
}
