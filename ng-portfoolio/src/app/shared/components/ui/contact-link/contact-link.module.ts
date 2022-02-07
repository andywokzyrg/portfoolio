import {NgModule} from "@angular/core";
import {ContactLinkComponent} from "./contact-link.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [ContactLinkComponent],
    exports: [ContactLinkComponent],
    imports: [CommonModule]
})
export class ContactLinkModule {}
