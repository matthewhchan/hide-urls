import {App, Plugin} from 'obsidian';

export default class HideUrls extends Plugin {
  async onload() {
    this.registerCodeMirror(
        (cm: any) => { cm.setOption("styleActiveLine", {nonEmpty : true}); });

    this.registerCodeMirror((cm: CodeMirror.Editor) => {
      cm.on("cursorActivity", (instance: any) => {
        let current_line_number = cm.getCursor().line;
        if (current_line_number != this.line_number) {
          cm.refresh();
          this.line_number = current_line_number;
        }
      });
    });
  }

  line_number: number;
}
