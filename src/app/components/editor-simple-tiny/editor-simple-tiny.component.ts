import { Component } from '@angular/core';

@Component({
    selector: 'app-editor-simple-tiny',
    templateUrl: 'editor-simple-tiny.component.html'
})
export class EditorSimpleTinyComponent {
    public titulo: string = 'editor-simple0tiny.component';

    keyupHandlerFunction(content) {
        console.log(content);
    }
}