import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';

describe('EnvConfigService units tests', () => {
  // class to be used in unit tests
  // sut => unit test convention
  let sut: EnvConfigService;

  beforeEach(async () => {
    // create a instance of the module
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile();

    // getting the instance of the class in the module
    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return the variable PORT', () => {
    expect(sut.getAppPort()).toBe(3000);
  });

  it('should return the variable NODE_ENV', () => {
    expect(sut.getNodeEnv()).toBe('test');
  });
});
