import { emailEntry } from "../../Containers/Register/RegisterActions";

it('logs email on register', () => {
  expect(emailEntry('Testing@testing.com')).toEqual({
    type: 'EMAIL_ENTRY',
    payload: 'testing@testing.com'
  });
});
