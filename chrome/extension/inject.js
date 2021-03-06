import React from 'react';
import { render } from 'react-dom';

export default function InjectApp(){
  return(
    <iframe
          style={{
            width: '100%',
            height: '100%',
          }}
          frameBorder={0}
          allowTransparency="true"
          src={chrome.extension.getURL(`inject.html?protocol=${location.protocol}`)}
        />
  );
}
window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
