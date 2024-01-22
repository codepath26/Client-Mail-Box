import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Signup from './Signup'
import SignupLeft from "./Signup_left";
import SignupRight from "./Signup_right";
describe('signup testing',()=>{
  test('singup component without error',()=>{
    // arrange 
    render(<Signup/>);
    // act

    // assert
    const textChack = screen.getByText('Create Your new account' , {exact : false});
    expect(textChack).toBeInTheDocument();
  })
  test('singup-left Component without error',()=>{
    // arrange 
    render(<SignupLeft/>);
    // act

    // assertt
    const textChack = screen.getByText('Already Have an account?' , {exact : false});
    expect(textChack).toBeInTheDocument();
  })
  test('updates state on input field change',()=>{
    render(<SignupRight/>);
    const inputName = screen.getByPlaceholderText('Your Name' , {exact : false}).value;
    fireEvent.change(inputName ,{target : {value : 'Parth'}});
    expect(inputName).toBe('Parth');
  })
  
  
  test('renders SignupRight component without errors', () => {
    render(<SignupRight />);
    // You can add more specific assertions if needed
    expect(screen.getByText('Create Your New Account')).toBeInTheDocument();
  });

test('submits form and calls onSubmitHandler', async () => {
  render(<SignupRight />);
  const submitButton = screen.getByText('Signup');
  fireEvent.click(submitButton);
});

test('handles matching passwords', () => {
  render(<SignupRight />);
  // Simulate form submission with matching passwords
  // Check if the component behaves as expected
});

test('handles non-matching passwords', () => {
  render(<SignupRight />);
  // Simulate form submission with non-matching passwords
  // Check if the component behaves as expected
});

test('displays error message on password mismatch', async () => {
  render(<SignupRight />);
  const submitButton = screen.getByText('Signup');
  
  fireEvent.click(submitButton);
  
  // Wait for asynchronous actions
  await waitFor(() => {
    // Check if the error message is displayed
    expect(screen.getByText('Please Check Password')).toBeInTheDocument();
  });
});

test('clears error message after a delay', async () => {
  render(<SignupRight />);
  const submitButton = screen.getByText('Signup');
  
  fireEvent.click(submitButton);
  
  // Wait for asynchronous actions
  await waitFor(() => {
    // Check if the error message disappears after a delay
    expect(screen.queryByText('Please Check Password')).toBeNull();
  });
});


});