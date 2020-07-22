import { TestBed } from '@angular/core/testing';
import { GetCardholderService } from './get-cardholder.service';
describe('GetCardholderService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GetCardholderService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=get-cardholder.service.spec.js.map