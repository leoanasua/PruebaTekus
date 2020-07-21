import { TestBed, getTestBed } from '@angular/core/testing';
import { DataserviceService } from './dataservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataService', () => {

  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    // Tener acceso a las variables limpias antes de cada it()
    injector = getTestBed();
  });

  it('should create an instance', () => {
    const service: DataserviceService = TestBed.inject(DataserviceService);
    expect(service).toBeTruthy();
  });
});

