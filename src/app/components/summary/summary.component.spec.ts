import { SummaryComponent } from './summary.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DataserviceService } from '../../services/dataservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SummaryComponent', () => {

  let component: SummaryComponent;
  let fixture: ComponentFixture <SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SummaryComponent
      ],
      providers: [
        DataserviceService,
        SummaryComponent
      ],
      imports: [
       HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
