ANGULAR NOTE

    1.冻结按钮的方法
        1. [disabled] = 'true' 冻结按钮 
        2. <button id="testButton" (click)="working()">Test Button</button>
        toggleDisabled(): any {

            let testButton = <HTMLInputElement> document.getElementById('testButton');
            testButton.disabled = !testButton.disabled;
            console.warn(testButton.disabled);
        } 

    2.后端获取Input中的value
        @ViewChild('bindingInput') bindingInput: ElementRef;
    HTML:   <input type="text" value="Sarah" #bindingInput></label>
            <div>
            <button (click)="getHTMLAttributeValue()">Get HTML attribute value</button> Won't change.
            </div>
    TS：    this.bindingInput.nativeElement.value   

    3.传入对象
    <app-item-list [items]="currentItems"></app-item-list>
    @Input() items: Item[]; -->

    4.@Input() 允许将数据从父组件输入到子组件中。
    子组件：  @Input() item: string;
    父组件： <app-item-detail [item]="currentItem"></app-item-detail>

    5. Use the @Output() decorator in the child component or directive to allow data to flow from the child out to the parent.
    子组件: import { Output, EventEmitter } from '@angular/core';
            @Output() newItemEvent = new EventEmitter<string>();
              addNewItem(value: string) {
                    this.newItemEvent.emit(value);
                }

    6. 添加编号
    <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
        ({{i}}) {{hero.name}}
    </div>

    7. DATEPIPE
        birthday = new Date(1988, 3, 15); // April 15, 1988 
        <p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>