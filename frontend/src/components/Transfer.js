import React from "react";

export function Transfer({ transferTokens, tokenSymbol }) {
  return (
    <div>
      <h4>Transfer</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const to = formData.get("to");
          const to2 = formData.get("to2");
          const to3 = formData.get("to3");
          const amount = formData.get("amount");

          if (to && amount) {
            transferTokens(to, amount);
          }
          if (to2 && amount) {
            transferTokens(to2, amount);
          }
          if (to3 && amount) {
            transferTokens(to3, amount);
          }
        }}
      >
        <div className="form-group">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipient address 1</label>
          <input className="form-control" type="text" name="to" required />
          <label>Recipient address 2</label>
          <input className="form-control" type="text" name="to2" required />
          <label>Recipient address 3</label>
          <input className="form-control" type="text" name="to3" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer" />
        </div>
      </form>
    </div>
  );
}
