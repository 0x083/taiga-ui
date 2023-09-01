import {Locator} from '@playwright/test';

export class TuiInputDateRangePO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);

    constructor(private readonly host: Locator) {}
}