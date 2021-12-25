import { render, screen , fireEvent} from '@testing-library/react';
import Counter from "./counter"

const {click} = fireEvent ;
test("should increment the value",()=>{

  render(<Counter/>);
  const incBtn = screen.getByRole("button", { name : /increment/i});
  const message = screen.getByText(/count /i)
  click(incBtn);
  expect(message).toHaveTextContent("count : 1")
})

test("should decrement the value",()=>{
   render(<Counter/>);
   const decBtn = screen.getByRole("button", {name: /decrement/i});
   const message = screen.getByText(/count/i); 
   click(decBtn);
   expect(message).toHaveTextContent("count : -1");
})