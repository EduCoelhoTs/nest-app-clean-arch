import { UserEntity, UserProps } from "../../user.entity";
import userDataBuilder from "@/users/domain/testing/helpers/user-data-builder";

describe('User entity tests cases', () => {
  let props: UserProps;
  let sut: UserEntity

  beforeEach(() => {
    props = userDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.password).toBe(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  })

  it('Getter of name property', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(props.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Setter of name property', () => {
    sut['name'] = 'test';
    expect(sut.name).toEqual('test');
    expect(typeof sut.name).toBe('string');
  });

  it('Getter of email property', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(props.email);
    expect(typeof sut.email).toBe('string');
  });

  it('Getter of password property', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(props.password);
    expect(typeof sut.password).toBe('string');
  });

  it('Setter of name property', () => {
    sut['password'] = 'password';
    expect(sut.password).toEqual('password');
    expect(typeof sut.password).toBe('string');
  });

  it('Getter of createdAt property', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  it('Should update a user', () => {
    sut.update('username')
    expect(sut.name).toEqual('username');
    expect(typeof sut.name).toBe('string');
  });

  it('Should update a user password', () => {
    sut.updatePassword('updatePassword')
    expect(sut.password).toEqual('updatePassword');
    expect(typeof sut.name).toBe('string');
  });
})
