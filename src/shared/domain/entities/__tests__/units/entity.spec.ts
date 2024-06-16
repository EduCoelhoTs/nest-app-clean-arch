import { validate as uuidValidator } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  value1: string;
  value2: number;
}

class Stub extends Entity<StubProps> { }

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props: StubProps = {
      value1: 'value1',
      value2: 1,
    }
    const sut = new Stub(props);
    expect(sut.props).toStrictEqual(props);
    expect(sut._id).not.toBeNull();
    expect(uuidValidator(sut._id)).toBeTruthy();
  })

  it('should accept a valid uuid', () => {
    const props: StubProps = {
      value1: 'value1',
      value2: 1,
    }
    const id = 'bc7b2e53-aece-4d11-b4b1-246a5475ace7';
    const sut = new Stub(props, id);
    expect(uuidValidator(sut._id)).toBeTruthy();
    expect(sut._id).toEqual(id);
  })

  it('should not accept a invalid uuid', () => {
    const props: StubProps = {
      value1: 'value1',
      value2: 1,
    }
    const id = 'bc7b2e53-4d11-b4b1-246a5475ace7';
    const sut = new Stub(props, id);
    expect(uuidValidator(sut._id)).toBeFalsy();
  })

  it('should convert a entity to a javascript object', () => {
    const props: StubProps = {
      value1: 'value1',
      value2: 1,
    }
    const id = 'bc7b2e53-4d11-b4b1-246a5475ace7';
    const sut = new Stub(props, id);
    expect(sut.toJson()).toStrictEqual({
      id,
      ...props
    });
  })
})
