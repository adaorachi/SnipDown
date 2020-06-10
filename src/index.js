import Utils from './utils';
import ToggleTab from './toggleTab';
import ExecCmdButton from './execCmdButton';


const snipText = () => {
  const defaultTextarea = document.querySelector('textarea.snip-text');

  const markDown = (...args) => {
    let options = {};
    if (args[0] && typeof args[0] === 'object') {
      options = Utils.extendDefaults(args[0]);
    }

    if (defaultTextarea !== null) {
      const areaParentEle = defaultTextarea.parentElement;
      areaParentEle.style.width = options.width;
      defaultTextarea.style.display = 'none';

      const snipMarkDown = document.createElement('div');
      snipMarkDown.className = 'snip-text-mark-down';
      areaParentEle.append(snipMarkDown);

      const snipTextBody = document.createElement('div');
      const snipTextArea = document.createElement('textarea');
      const snipPreviewArea = document.createElement('div');

      const defaultTextClassName = Utils.concatClassName(defaultTextarea);
      snipTextBody.className = 'snipTextBody';
      snipTextBody.style.height = 'auto';
      snipTextBody.style.width = '100%';

      snipTextArea.id = 'snip-write';
      snipTextArea.className = `snip-write snip-tab-content tab-content active ${defaultTextClassName}`;
      snipTextArea.style.height = '100%';
      snipTextArea.style.width = '100%';
      snipTextArea.style.border = 'none';

      snipPreviewArea.id = 'snip-preview';
      snipPreviewArea.className = `snip-preview snip-tab-content tab-content ${defaultTextClassName}`;
      snipPreviewArea.style.height = 'auto';
      snipPreviewArea.style.width = '100%';
      snipPreviewArea.style.display = 'none';


      snipTextBody.append(snipTextArea);
      snipTextBody.append(snipPreviewArea);

      const exec = ExecCmdButton();

      window.addEventListener('load', () => {
        Utils.containerStyles(args[0]);
        exec.execCmd('.buttons');
        ToggleTab.toggle('snipText-tabnav-tabs');
      });

      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'snipText-button-container';

      snipMarkDown.append(buttonContainer);
      Utils.displayButtons(args[0]);
      snipMarkDown.append(snipTextBody);
    }
  };

  return { markDown };
};

export default snipText;