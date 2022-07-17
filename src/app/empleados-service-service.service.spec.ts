import { TestBed } from '@angular/core/testing';

import { EmpleadosServiceServiceService } from './empleados-service-service.service';

describe('EmpleadosServiceServiceService', () => {
  let service: EmpleadosServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
