import {App, Plugin} from 'obsidian';

export default class HideUrls extends Plugin {
  async onload() {
    this.registerCodeMirror((cm: any) => {
      cm.setOption("styleActiveLine", {nonEmpty: true});
    });
  }
}
