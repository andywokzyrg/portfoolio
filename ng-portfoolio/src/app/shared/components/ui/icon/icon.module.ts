import {NgModule} from "@angular/core";
import {IconComponent} from "./icon.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [IconComponent],
    exports: [IconComponent],
    imports: [CommonModule]
})
export class IconModule {}
